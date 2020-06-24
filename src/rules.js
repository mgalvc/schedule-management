const DB = require('./db')

class Rules {

    constructor(day, intervals) {
        this.day = day
        this.intervals = intervals
    }

    static save(rule) {
        return new Promise((resolve, reject) => {
            DB.append(rule)
                .then((res) => resolve(res))
                .catch((err) => reject(err))
        })
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            DB.get()
                .then((result) => resolve(result))
                .catch((err) => reject(err))
        })
    }
}

module.exports = Rules