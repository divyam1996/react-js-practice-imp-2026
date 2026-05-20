// Anagrams in a list of words
// Write a JavaScript function that:
// Accepts an array of strings
// Groups words that are anagrams of each other (e.g., 'listen' and 'silent')
// Returns an array of groups, where each group is an array of anagram words
// Constraints:
// Ignore case sensitivity
// Maintain original words in the output
// Example:
	const input = ['listen', 'silent', 'enlist', 'rat', 'tar', 'art', 'bake'];

//  Expected output (order of groups may vary):
//  [
//    ['listen', 'silent', 'enlist'],
//    ['rat', 'tar', 'art'],
//    ['bake']
// ]

// Array.from returns an array from an iterable object, in this case, the values of the map which are arrays of anagrams. 
// The result is an array of arrays, where each inner array contains words that are anagrams of each other.

function groupAnagrams(words){
  let map = new Map();
    for(let word of words){
        const sorted = word.toLowerCase().split('').sort().join('');
        if(!map.has(sorted)){
            map.set(sorted,[]);
        }
        map.get(sorted).push(word);
    }
    console.log(map.values());
    return Array.from(map.values());
}


const result = groupAnagrams(input);

console.log(result);
