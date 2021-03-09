class Marker {
  constructor (size, color, remainingInk) {
      this.size = size;
      this.color = color;
      this.remainingInk= remainingInk
  }

  write(word) {
      this.remainingInk -= word.split(' ').join('').length;
      if (word.length > this.remainingInk) {
          return word.slice(0,this.remainingInk)
      }
      return word;
  }
}



module.exports = Marker
