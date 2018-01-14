const app = "I don't do much.";

function destructivelyAppendKitten(newName) {
  kittens.push(newName);
  return kittens;
}

function destructivelyPrependKitten(newName) {
  kittens.unshift(newName);
  return kittens;
}

function destructivelyRemoveLastKitten(nameToRemove) {
  kittens.pop(nameToRemove);
  return kittens;
}

function destructivelyRemoveFirstKitten(nameToRemove) {
  kittens.shift(nameToRemove);
  return kittens;
}

function appendKitten(newName) {
  var newKittensArray = kittens.splice(kittens.length-1,0,[newName]);
  return newKittensArray;
}