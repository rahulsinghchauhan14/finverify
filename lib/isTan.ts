import isString from "./isString";

export default function isTan(str : string) : boolean {
    if(!isString(str)){
        return false;
    }

    const tanRegex = /^[A-Z]{4}\d{5}[A-Z]{1}$/;
    return tanRegex.test(str);
    
}