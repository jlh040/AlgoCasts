// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// O(n^2) quadratic runtime
function reverse(str) {
    let reverseString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }

    return reverseString;
}

module.exports = reverse;
