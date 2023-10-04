//1. Let's build a Teacher interface
interface Teacher {
  readonly firstName: string; // modified during initialization & can't be changed afterward
  readonly lastName: string; // modified during initialization & can't be changed afterward
  fullTimeEmployee: boolean; //attribute always defined
  yearsOfExperience?: number; // Optional attribute
  location: string; //attribute always defined
  [key: string]: any  //index signature which allow additional dynamic properties
}



//2. Extending the Teacher class
interface Director extends Teacher {
  numberOfReports: number;
}


//3. Printing teachers
interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};


//4. Writing a class
// Defining an interface for the constructor parameters
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Defining an interface for the class itself
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementing the class and interfaces
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

