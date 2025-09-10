function isPalindrome(str){
    let rev = str.split('').reverse().join('');
    return rev === str;
}

let str = 'abccba';
let str2 = 'abcdba';

console.log(isPalindrome(str));
console.log(isPalindrome(str2));
