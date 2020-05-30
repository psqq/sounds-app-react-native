const dirTree = require('directory-tree');

let consts = [];
let tree = {};

function addToTree(varName, pathFromAssets) {
  const treePath = pathFromAssets
    .slice('./assets/'.length, pathFromAssets.length - 4)
    .split('/')
    .map((s) => s.replace(/[^\w]/g, '_'));
  console.log(treePath, varName);
  let obj = tree;
  for (const pathChunk of treePath.slice(0, treePath.length - 1)) {
    if (!obj[pathChunk]) {
      obj[pathChunk] = {};
    }
    obj = obj[pathChunk];
  }
  obj[treePath[treePath.length - 1]] = varName;
}

const assetsTree = dirTree('./src/assets', null, (item, PATH, stats) => {
  const varName = item.path
    .slice('src/assets'.length + 1, item.path.length - 4)
    .replace(/[^\w]/g, '_')
    .toUpperCase();
  const pathFromAssets =
    './' + item.path.slice('src/'.length).replace(/\\/g, '/');
  addToTree(varName, pathFromAssets);
  consts.push(`export const ${varName}: rrtfr = require('${pathFromAssets}');`);
});

console.log(consts.join('\n'));

console.log();

console.log(
  'export const tree = ' +
    JSON.stringify(tree, null, 4)
      //.replace(/"/g, '') +
      .split('\n')
      .map((s) => s.replace(/"(\w+)",?$/g, '$1,'))
      .join('\n') +
    ';',
);
