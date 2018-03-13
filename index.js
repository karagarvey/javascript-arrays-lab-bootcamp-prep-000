const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name){
  appendKitten = [...kittens, name]
  return appendKitten
}

function prependKitten(name) {
  prependKitten = [name, ...kittens]
  return prependKitten
}

function removeLastKitten() {
  kittens[kittens.length-1]
}
