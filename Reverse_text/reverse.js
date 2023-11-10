//Reverse text function

function reverseText(text) {
  if (text.length === 0) {
    throw new Error("text is empty");
  }
  return text.split(" ").reverse().join(" ");
}

module.exports = reverseText;
