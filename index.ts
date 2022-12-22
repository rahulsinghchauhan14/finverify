import isEmail from './lib/isEmail';
import isDomain from './lib/isDomain';
import isGstin from './lib/isGstin';
import isPan from './lib/isPan';
import isString from './lib/isString';
import isAadhar from './lib/isAadhar';
import isTan from './lib/isTan';
import cardType from './lib/cardType';
import isAmount from './lib/isAmount';
import isCreditCard from './lib/isCreditCard';

const version = '1.0.0';

const sillysauce = {
  version, 
  isEmail,
  isAadhar,
  isDomain,
  isGstin,
  isPan,
  isString,
  isTan,
  cardType,
  isAmount,
  isCreditCard
};

export default sillysauce;
