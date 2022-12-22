import isDomain from "./isDomain";
import isString from "./isString";


export default function isEmail(str: string): boolean {
    
    if(!isString(str) || (str.length > 255)){
        return false;
    }
 
    const domain = str.split('@')?.pop()?.toLowerCase()

    if(!isDomain(domain)){
        return false;
    }

    // Regular expression for checking if a string is a valid email address
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(str);
}
  
