// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak (){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructors extends Person {
    constructor(instructorsAtrs){
        super(instructorsAtrs);
    
        this.specialty = dearInstructors.specialty;
        this.favLanguage = dearInstructors.favLanguage;
        this.catchPhrase = dearInstructors.catchPhrase;
    }

    demo(){
        return 'Today we are learning about ${subject}';
    }
    grade(){
        return '${student.name} receives a perfect score on ${subject}';
    }
}

class Students extends Person {
    constructor(studentssAtrs){
        super(studentssAtrs);
    
        this.previousBackground = dearStudents.previousBackground;
        this.className = dearStudents.className;
        this.favSubjects = dearStudents.favSubjects;
    }

    listsSubjects(){
        return 'My favorites subjects are ${favSubjects}'
    };
    PRAssignment(){
        return '${student.name} has submitted a PR for ${subject}' 
    };
    sprintChallenge(){
        return '${student.name} has begun sprint challenge on {subject}' 
    };
}

class ProjectManagers extends Instructors {
    constructor(managersAtrs){
        super(managersAtrs);
    
        this.gradClassName = dearPms.gradClassName;
        this.favInstructor = dearPms.gradClassName;
    }

    standUp(){
        return '${name} announces to ${channel}, @channel standy times!​​​​​'
    };
    debugsCode(){
        return "{name} debugs {student.name}'s code on {subject}"
    }
}


const dearInstructors = new Instructors ({

        specialty: "Math",
        favLanguage: "Spanish",
        catchPhrase: "Ponte las pilas!"
});
const dearStudents = new Studen ({

        previousBackground: "Play video games more often",
        className: "Web21",
        favSubjects: ["History", "Math", "Science"]
});
const dearPms = new ProjectManagers ({

        gradClassName: "CS1",
        favInstructor: "Josh"
});

console.log(speak.())
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()