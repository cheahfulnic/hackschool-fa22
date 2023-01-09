const Self = {
    name: 'Nicholas',
    wallet: 10,
    paymentMethod: 'credit card',
    location: 'San Diego',
    currencyType: ['RM', '$'],

    pay: function (person, amount) {
        return(this.wallet - amount);
    }
}  