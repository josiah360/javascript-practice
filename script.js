var word = prompt('Check for palindrome');
word = word.replace(/\s/g, '');
var wordSplit = word.split('');
var splitReverse = wordSplit.reverse();
var newWord = splitReverse.join('');

if (word.toLowerCase() === newWord.toLowerCase()) {
    console.log('Yay! It\'s a palindrome');
}
else {
    console.log('No, It\'s not a palindrome');
}

