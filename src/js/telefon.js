export default class Validator {
  static validateTelefon(tlf) {
    return tlf.replace(/^8/, '+7').replace(/[()-\s]/g, '');
  }
}
