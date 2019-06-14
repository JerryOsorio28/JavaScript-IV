// CODE here for your Lambda Classes
class Person {
    constructor(atrs){
        this.name = atrs.name;
        this.age = atrs.age;
        this.location = atrs.location;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructors extends Person {
    constructor(instructorsAtrs){
        super(instructorsAtrs);
    
        this.specialty = instructorsAtrs.specialty;
        this.favLanguage = instructorsAtrs.favLanguage;
        this.catchPhrase = instructorsAtrs.catchPhrase;
    }

    demo(){
        return `Today we are learning about ${subjects.subject4}`;
    }
    grade(){
        return `${sarah.name} receives a perfect score on ${subjects.subject5}`;
    }
}

class Students extends Person {
    constructor(studentssAtrs){
        super(studentssAtrs);
    
        this.previousBackground = studentssAtrs.previousBackground;
        this.className = studentssAtrs.className;
        this.favSubjects = studentssAtrs.favSubjects;
    }

    listsSubjects(){
        return `My favorites subjects are ${jerry.favSubjects[0]}, ${jerry.favSubjects[1]} & ${jerry.favSubjects[2]}.`;
    };
    PRAssignment(){
        return `${jerry.name} has submitted a PR for ${subjects.subject2}` ;
    };
    sprintChallenge(){
        return `${sarah.name} has begun sprint challenge on ${subjects.subject4}`;
    };
}

class ProjectManagers extends Instructors {
    constructor(managersAtrs){
        super(managersAtrs);
    
        this.gradClassName = managersAtrs.gradClassName;
        this.favInstructor = managersAtrs.gradClassName;
    }

    standUp(){
        return `${pat.name} announces to {channel}, @channel standy times!​​​​​`;
    };
    debugsCode(){
        return `${darren.name} debugs ${sarah.name}'s code on ${subjects.subject4}`;
    }
}


const thatPerson = new Person ({
        name: "PERSON",
        age: "27",
        location: "FL"
      
});
//<------------------------------------------------------INSTRUCTORS  
const josh = new Instructors ({
        name: "The Josh",
        specialty: "Teaching",
        favLanguage: "Spanish",
        catchPhrase: "//any suggestions?",
});
const dan = new Instructors ({
        name: "Dan",
        specialty: "Cats?",
        favLanguage: "English",
        catchPhrase: "Dad Jokes"
});
const adetunji = new Instructors ({
        name: "Adetunji",
        specialty: "skribbles",
        favLanguage: "English",
        catchPhrase: "*laughs*"
});
//<------------------------------------------------------STUDENTS
const jerry = new Students ({
        name: "Jerry",
        previousBackground: "Play video games more often",
        className: "Web21",
        favSubjects: ["History", "Math", "Science"]
});
const sarah = new Students ({
        name: "Sarah",
        previousBackground: "unnecesary makeup",
        className: "Web21",
        favSubjects: ["History", "Math", "Science"]
});
const john = new Students ({
        name: "John",
        previousBackground: "Play video games more often... just like Jerry",
        className: "Web21",
        favSubjects: ["History", "Math", "Science"]
});
//<------------------------------------------------------PROJECT MANAGERS
const pat = new ProjectManagers({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.'
});

const darren = new ProjectManagers({
    name: 'Darren',
    age: '25',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'North Carolina',
    specialty: 'React',
    favLanguage: 'Javascript',
    catchPhrase: 'Gang. Gang.',
});
const austin = new ProjectManagers({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});
//<------------------------------------------------------SUBJECTS
const subjects = {
    subject1: "Math",
    subject2: "Science",
    subject3: "Spanish",
    subject4: "Javascript",
    subject5: "Quantum Physics"
};

console.log(pat.speak());
console.log(josh.demo());
console.log(adetunji.grade());
console.log(john.listsSubjects());
console.log(sarah.PRAssignment());
console.log(jerry.sprintChallenge());
console.log(austin.standUp());
console.log(darren.debugsCode());
