const dirTree = require('directory-tree');
const _ = require('lodash');
const path = require('path');
var shell = require('shelljs');

const PATH_TO_RES =
  '/home/serg/Downloads/sleep-sounds_4.5.3.RC-Android-Free(69)/res/';

/** @type {directoryTree.DirectoryTree[]} */
const items = [];

dirTree(PATH_TO_RES, null, (item) => {
  items.push(item);
});

function findAllSounds() {
  const res = [];
  for (let item of items) {
    if (item.extension === '.ogg') {
      res.push(item);
    }
  }
  return res;
}

/** @type {directoryTree.DirectoryTree[]} */
const sounds = findAllSounds();

function printAllSounds() {
  for (let item of sounds) {
    console.log(item);
    console.log(
      item.name.substring(0, item.name.length - item.extension.length),
    );
  }
}

function findAllImagesForSound(soundName) {
  const imgTypes = {
    bg: {
      getName: (x) => `bg_${x}.jpg`,
    },
    icNormal: {
      getName: (x) => `ic_${x}_normal.png`,
    },
    pic: {
      getName: (x) => `pic_${x}.jpg`,
    },
  };
  /** @type {{[key: string]: directoryTree.DirectoryTree}} */
  const res = {};
  for (let item of items) {
    let done = true;
    for (let [k, v] of _.entries(imgTypes)) {
      if (!res[k]) {
        if (item.name === v.getName(soundName)) {
          res[k] = item;
        } else {
          done = false;
        }
      }
    }
  }
  return res;
}

// printAllSounds();
// console.log(findAllImagesForSound('airplane'));

const FOLDER_FOR_IMPORT = path.resolve(__dirname, '../src/assets/original_2');

const imported = [];

dirTree(FOLDER_FOR_IMPORT, null, null, (item) => {
  imported.push(item.name);
});

console.log(imported);

/**
 * @param {directoryTree.DirectoryTree} soundItem
 */
function tryImportSound(soundItem) {
  const soundName = soundItem.name.substring(
    0,
    soundItem.name.length - soundItem.extension.length,
  );
  if (imported.includes(soundName)) {
    return;
  }
  const images = findAllImagesForSound(soundName);
  if (Object.keys(images).length === 3) {
    const dir = path.resolve(FOLDER_FOR_IMPORT, soundName);
    shell.mkdir('-p', dir);
    shell.cp('-f', soundItem.path, dir);
    _.entries(images).forEach(([k, v]) => {
      shell.cp('-f', v.path, dir);
    });
    shell.cp('-f', soundItem.path, dir);
    console.log('imported', soundName);
  }
}

sounds.forEach((x) => {
  tryImportSound(x);
});
