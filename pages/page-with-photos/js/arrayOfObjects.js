let students = [
    {
      firstName: 'John',
      lastName: 'Smith',
      averageScore:  8.7
    },

    {
      firstName: 'Lia',
      lastName: 'Smith',
      averageScore:  7
    },
    {
        firstName: 'Traicy',
        lastName: 'Dalton',
        averageScore:  3
      },
      {
        firstName: 'Richard',
        lastName: 'Donavan',
        averageScore:  9.7
      },
      {
        firstName: 'Melisa',
        lastName: 'Richard',
        averageScore:  10
      },
      {
        firstName: 'Alisa',
        lastName: 'Newton',
        averageScore:  5
      },
      {
        firstName: 'John',
        lastName: 'Williams',
        averageScore:  4.8
      }]

      let studentWithGPAAbove5 = [];
      let studentWithGPABelow5 = [];


for (let i = 0; i < students.length; i++)
{
    if (students[i].averageScore >= 5) {
        studentWithGPAAbove5.push(students[i]);
    } else {
        studentWithGPABelow5.push(students[i]);
    }
}

// print array of object
console.log("Students with GPA above 5: ")
studentWithGPAAbove5.forEach(student => {
    console.log("First name: " + student.firstName);
    console.log("Last name: " + student.lastName);
    console.log("Average score: " + student.averageScore);
    console.log(" ");    
});

console.log(" ");

console.log("Students with GPA below 5: ")
studentWithGPABelow5.forEach(student => {
    console.log("First name: " + student.firstName);
    console.log("Last name: " + student.lastName);
    console.log("Average score: " + student.averageScore);
    console.log(" ");
});

