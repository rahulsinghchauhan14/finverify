import isString from "./isString";


export default function isPan(str : string) : boolean {
    if(!isString(str) || (str.length !== 10)){
        return false;
    } 

    // Check first five characters
    const firstFive = str.substring(0, 5);
    if (!/^[A-Z]{5}$/.test(firstFive)) {
        return false;
    }
    
    // Check next four characters
    const nextFour = str.substring(5, 9);
    if (!/^\d{4}$/.test(nextFour)) {
        return false;
    }
    
    // Check last character
    const lastChar = str.substring(9, 10);
    if (!/^[A-Z]$/.test(lastChar)) {
        return false;
    }
    
    // If all checks pass, PAN is valid
    
    return true;
}