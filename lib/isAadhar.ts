import { verhoeffCheck } from "./util/algorithms";

export default function isAadhar(str : string) : boolean {

    const aadhar = str.replace(/\s/g, "");

    const intRegex = /^\d{12}$/;
     // Check that the Aadhaar number is 12 digits long
    if (!intRegex.test(aadhar)) {
        return false;
    }
    
    // varhoeffCheck
    if(!verhoeffCheck(aadhar)){
        return false;
    }
    
    // The Aadhaar number is valid
    return true;
}