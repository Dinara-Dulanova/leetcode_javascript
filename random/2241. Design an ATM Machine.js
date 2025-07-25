
var ATM = function() {
    this.banknotes = new Map();

    this.banknotesArr = [20, 50 ,100, 200, 500]
    this.banknotesArr.forEach(note => {
        this.banknotes.set(note, 0)
    })
};

/**
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function(banknotesCount) {
    banknotesCount.forEach((count, index) => {
        let note = this.banknotesArr[index]
        this.banknotes.set(note, this.banknotes.get(note) + count);
    })
};

/**
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function(amount) {
    let rezArr = Array(5).fill(0)
    for (let i = 4; i >= 0; i--) {
        let note = this.banknotesArr[i];
        if (this.banknotes.get(note)) {
            let takeNote = Math.min(Math.floor(amount / note), this.banknotes.get(note))
            // this.banknotes.set(note, takeNote)
            amount -= takeNote * Number(note)
            rezArr[i] = takeNote;
        }
    }

    if (amount == 0 ) {
        for (let i = 0; i < 5; i++) {
            let note = this.banknotesArr[i];
            this.banknotes.set(note, this.banknotes.get(note) - rezArr[i]);
        }
        return  rezArr
    } else {
        return [-1]
    }
};