class Room {

    constructor(name, description) {
        //settable by constructor
        this.name = name;
        this.description = description;

        //unsettable by constructor
        this.contents = [];
    }



    add(item) {
        this.contents.push(item);
        return this;
    }


    has(target) {
        return this.contents.includes(target);
    }
}

const room = new Room();


module.exports = Room

/*
class Room {
  constructor(...param){
    this.name=param[0];
    this.description=param[1];
    this.contents=[];
  }
  add(item){
    this.contents.push(item);
    return this;
  }
  has(item){
      return this.contents.includes(item);
  }
}
module.exports = Room
*/
