const input = "I am a student";
const arr = input.split(/[^a-zA-Z]/);
console.log(arr.reverse().join(" "));
