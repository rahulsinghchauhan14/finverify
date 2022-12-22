import isString from "./isString";

export default function isGstin(str : string) : boolean {
    if(!isString(str)){
        return false;
    }
    
    const regex = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/;
    return regex.test(str); 

}