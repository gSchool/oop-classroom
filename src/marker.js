class Marker {
    constructor(size, color, remainingInk) {
        this.size = size;
        this.color = color;
        this.remainingInk = remainingInk;
    }

    write(string) {
        let ink = "";
        for (let char of string) {
            if (char != ' ' && this.remainingInk) {
                this.remainingInk--;
                ink += char;
            } else if (char === ' ') {
                ink += char;
            }

        }
        if (!this.remainingInk) {
            return ink;
        }
        return string;
    }
}
const marker = new Marker();
module.exports = Marker