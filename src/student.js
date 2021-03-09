class Student {
    constructor (name, skillLevel) {
        this.name = name;
        this.skillLevel = skillLevel;
        this.assignments = [];
    }

    study() {
        if (this.skillLevel < 100) this.skillLevel += 1;
        return this;
    }

    doHomework(homework) {
        if (!homework) {
            return this.assignments
            .filter(assignment => !assignment.completed)
            .forEach(assignment => this.doHomework(assignment))
        }
        
        if (homework.skillLevel && homework.skillLevel <= 100) {
            this.assignments.push(homework);
          }
      
          if (this.skillLevel > homework.skillLevel) {
            homework.completed = true;
          } else {
            homework.completed = false;
        }
       }
      
        
        
        
        // if (this.skillLevel > homework.skillLevel) {
        //     homework.completed = true;
        //     if (homework.skillLevel >= 1) {
        //         this.assignments.push(homework) 
        //     }    
            
        // } else if (this.skillLevel < homework.skillLevel) {
        //     homework.completed = false;
        // }

        // if (typeof homework === 'undefined') {
        //     for (var i = 0; i < this.assignments.length; i++) {
        //         if (this.assignments[i].skillLevel < this.skillLevel) {
        //             this.assignments.splice(i,1)
        //         }
        //     }
            
      // 

      // return this

      
}
  

var student = new Student ('Nick', 100) 
// student.doHomework({ title: 'Crushing Candy Code', skillLevel: 0 })
//     .doHomework({ title: 'Get us to Pluto', skillLevel: 101 })
//     .doHomework({ title: 'OOP Classroom', skillLevel: 47 })
//     .doHomework({ title: 'Capstone Project', skillLevel: 90 })


// console.log(this.assignments)
console.log(student)

module.exports = Student
