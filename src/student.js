class Student {

    constructor(name, skillLevel) {

        //settable in constructor
        this.name = name;
        this.skillLevel = skillLevel;

        //affected by methods below
        this.assignments = [];
    }

    study() {

        if (this.skillLevel === 100) {
            return this;
        }
        this.skillLevel += 1;
        return this;

    }

    doHomework(assignment) {


        //console.log("Homework called w/: ", assignment);
        //console.log("Student Skill level: ", this.skillLevel);
        //console.log("Homework Skill Level: ", assignment.skillLevel);


        if (assignment === undefined) {
            console.log("does this trigger?")
            for (let i = 0; i < this.assignments.length; ++i) {
                if (this.skillLevel >= this.assignments[i].skillLevel) {
                    console.log("Set " + this.assignments[i] + "to true")
                    this.assignments[i].completed = true;
                }
            }
        } else if ((assignment.skillLevel > 0) && (assignment.skillLevel <= 100)) {
            // establish if this assignment can be completed, compare assignment's level to the student's


            // decide if it's completed or not

            //assignment goes into this.assignments array
            if (this.skillLevel >= assignment.skillLevel) {
                // MARK it as completed true/false
                assignment.completed = true;//true if student is smart enough

            } else {
                assignment.completed = false;//false if not
            }
            this.assignments.push(assignment);//put in array either way



        } else {
            //do I need an else?
            console.log("does this else do anything");
        }



    }
}

module.exports = Student