export default class Validator {
  static validateTelefon(tlf) {
    const plus = '+';
    return plus + tlf.replace(/^8/, '+7').replace(/\D/g, '');
  }
}
