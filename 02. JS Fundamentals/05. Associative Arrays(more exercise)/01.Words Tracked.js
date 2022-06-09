function solve(input) {
  let words = input.shift().split(" ");

  // Initialize map
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    map.set(words[i], 0);
  }

  for (let word of input) {
      if(map.has(word)) {
          let oldCount = map.get(word);
          map.set(word, oldCount + 1)
      }
  }

  let sortedMap = [...map]
  .sort((a, b) => )

  sortedMap
}

solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
