function isPalindrome(str) {
    const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = sanitizedStr.split('').reverse().join('');
    return sanitizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false