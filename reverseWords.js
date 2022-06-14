/**Given a string s, reverse the order of characters in each word within a sentence while 
 * still preserving whitespace and initial word order. 
 * 
 * Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
 */
const s = "Let's take LeetCode contest";

var reverseWords = function (s) {
  const words = s.split(" ");
  console.log(words);

  for (let i = 0; i < words.length; i++) {
    words[i] = reverseWord(words[i]);
  }
  return words.join(" ");
};

function reverseWord(word) {
  let myWord = word.split("");
  let start = 0;
  let end = myWord.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (end > mid) {
    let temp = myWord[start];

    myWord[start] = myWord[end];
    myWord[end] = temp;
    start++;
    end--;
  }
  return myWord.join("");
}

console.log(reverseWords(s));
