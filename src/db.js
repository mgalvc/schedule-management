const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

class DB {
    static FILE_PATH = path.join(__dirname, '../database/db.json')

    static get(id=undefined) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.FILE_PATH, {encoding: 'utf8', flag: 'a+'}, (err, data) => {
                if(err) {
                    reject(err.message)
                    return
                }
                
                let result = data ? JSON.parse(data) : []

                if(id) {
                    resolve(result.find(el => el._id === id))
                    return
                }

                resolve(result)
            })
        })
    }

    static append(data) {
        data._id = this.getId()
        return new Promise((resolve, reject) => {
            this.get()
                .then((currentData) => {
                    currentData.push(data)
                    fs.writeFileSync(this.FILE_PATH, JSON.stringify(currentData))
                    resolve({created: true, _id: data._id})
                })
                .catch(err => reject({created: false, error: err}))
        })
    }

    static getId() {
        return crypto.randomBytes(8).toString('hex')
    }
}

module.exports = DB