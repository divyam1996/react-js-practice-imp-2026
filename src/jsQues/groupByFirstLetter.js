// 3. Write a function that:
// Accepts an array of words
// Groups them by their starting letter (case-insensitive)
// Returns an object where keys are the starting letters, and values are arrays of words
// Example:
const input = ['Apple', 'Avocado', 'banana', 'Blueberry', 'cherry'];

//  Expected output:
//  {
//    a: ['Apple', 'Avocado'],
//    b: ['banana', 'Blueberry'],
//    c: ['cherry']
//  }


function groupByFirstLetter(words) {
    return words.reduce((acc,word)=>{
        const firstLetter = word[0].toLowerCase();
        if(!acc[firstLetter]){
            acc[firstLetter]=[];
        }
        acc[firstLetter].push(word);
        return acc;
    },{});
}

const result = groupByFirstLetter(input);

console.log(result);
