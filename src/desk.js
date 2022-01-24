class Desk {
    constructor(length, width, height, isWhiteboard) {
        this.length = 60
        this.width = 48
        this.height = 48
        this.isWhiteboard = false
        this.content = ('')
    }

    write(string) {
        this.content += string;
    }

    wipe() {
        if (this.isWhiteboard === true) {
            this.content = ('');
        }
    }
}

const desk = new Desk()

module.exports = Desk
