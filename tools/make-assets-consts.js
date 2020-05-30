const dirTree = require('directory-tree');

let consts = [];

const assetsTree = dirTree('./src/assets', null, (item, PATH, stats) => {
  const varName = item.path
    .slice('src/assets'.length + 1, item.path.length - 4)
    .replace(/[^\w]/g, '_')
    .toUpperCase();
  const pathFromAssets =
    './' + item.path.slice('src/'.length).replace(/\\/g, '/');
  consts.push(`export const ${varName}: rrtfr = require('${pathFromAssets}');`);
});

console.log(consts.join('\n'));
