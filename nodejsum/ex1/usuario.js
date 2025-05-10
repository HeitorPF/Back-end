const fs = require('fs')

class Usuarios {
    constructor(path) {
        this.path = path
    }

    lerUsuarios(){
        return fs.readFileSync(this.path, 'utf-8').split('\n').filter(Boolean)
    }
}

module.exports = Usuarios