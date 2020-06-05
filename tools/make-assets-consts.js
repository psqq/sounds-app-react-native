const dirTree = require('directory-tree');

let consts = [];
let tree = {};

function addToTree(varName, pathFromAssets) {
  const treePath = pathFromAssets
    .slice('./'.length, pathFromAssets.length - 4)
    .split('/')
    .map((s) => s.replace(/[^\w]/g, '_'));
  // console.log(treePath, varName);
  let obj = tree;
  for (const pathChunk of treePath.slice(0, treePath.length - 1)) {
    if (!obj[pathChunk]) {
      obj[pathChunk] = {};
    }
    obj = obj[pathChunk];
  }
  obj[treePath[treePath.length - 1]] = varName;
}

dirTree('./src/assets', null, (item) => {
  if (item.name === 'index.ts') {
    return;
  }
  const varName = item.path
    .slice('src/assets'.length + 1, item.path.length - 4)
    .replace(/[^\w]/g, '_')
    .toUpperCase();
  const pathFromAssets =
    './' + item.path.slice('src/assets/'.length).replace(/\\/g, '/');
  addToTree(varName, pathFromAssets);
  consts.push(`export const ${varName}: rrtfr = require('${pathFromAssets}');`);
});

console.log(`// Require return type for resource
type rrtfr = number;
`);

console.log(consts.join('\n'));

console.log();

console.log(
  'export const ASSETS_TREE = ' +
    JSON.stringify(tree, null, 2)
      //.replace(/"/g, '') +
      .split('\n')
      .map((s) => s.replace(/"(\w+)",?$/g, '$1,'))
      .join('\n') +
    ' as const;',
);
