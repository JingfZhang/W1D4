var words = ["ground", "control", "to", "major", "tom"];

function map(arr, fun) {
  let resultArray = [];

  for (var element of arr) {
    resultArray.push(fun(element));
  }
  console.log(resultArray);
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});