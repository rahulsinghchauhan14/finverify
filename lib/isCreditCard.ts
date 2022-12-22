import isString from './isString';
import isLuhnValid from './isLuhnValid';
import cardType from './cardType';

export default function isCreditCard(card : string) {
    if(!isString(card)){
        return false;
    }
    
    const provider = cardType(card);
    
    const sanitized = card.replace(/[- ]+/g, '');

    // if (provider && provider.toLowerCase() in cards) {
    //     // specific provider in the list
    //     if (!(cards[provider.toLowerCase()].test(sanitized))) {
    //     return false;
    //     }
    // } else if (provider && !(provider.toLowerCase() in cards)) {
    //     /* specific provider not in the list */
    //     throw new Error(`${provider} is not a valid credit card provider.`);
    // } else if (!(allCards.test(sanitized))) {
    //     // no specific provider
    //     return false;
    // }
    return isLuhnValid(card);
}
