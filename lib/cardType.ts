interface card {
    name: string;
    type: string;
  }
export default function cardType(cardNumber: string): card {

    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
    const amexRegex = /^3[47][0-9]{13}$/;
    const discoverRegex = /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/;
    const dinersclub = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
    const jcb = /^(?:2131|1800|35\d{3})\d{11}$/;
    const unionpay = /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/; 
    
    if (visaRegex.test(cardNumber)) {
        return { name:"Visa", type:"visa" };
    } else if (mastercardRegex.test(cardNumber)) {
        return { name:"Mastercard", type:"master" };
    } else if (amexRegex.test(cardNumber)) {
        return { name:"American Express", type:"amex" };
    } else if (discoverRegex.test(cardNumber)) {
        return { name:"Discover", type:"dis" };
    } else if (dinersclub.test(cardNumber)) {
        return { name:"Diners Club", type:"dinersclub" };
    } else if (unionpay.test(cardNumber)) {
        return { name:"Union Pay", type:"unionpay" };
    } else if (jcb.test(cardNumber)) {
        return { name:"Japan Credit Bureau", type:"jcb" };
    } else {
        return { name:"Unknown", type:"" };
    }  

}