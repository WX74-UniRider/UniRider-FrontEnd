export class Card {
    constructor(cardName = '', cardNumber = '', expiredMonth = '', expiredYear = '', cvc = '') {
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.expiredMonth = expiredMonth;
        this.expiredYear = expiredYear;
        this.cvc = cvc;
    }
}
