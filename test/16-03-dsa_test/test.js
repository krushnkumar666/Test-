const filterStudents = (students, criteria) =>
  students.filter(student =>
    Object.entries(criteria).every(([key, conditions]) =>
      Object.entries(conditions).every(([conditionKey, conditionValue]) =>
        conditionKey === 'eq' ? student[key] === conditionValue :
        conditionKey === 'gt' ? student[key] > conditionValue :
        conditionKey === 'lt' ? student[key] < conditionValue :
        conditionKey === 'includes' && student[key].includes(conditionValue)
      )
    )
  );


const students = [
  { name: 'Alice', age: 20, grade: 'A', subjects: ['Math', 'Physics', 'Chemistry'] },
  { name: 'Bob', age: 21, grade: 'B', subjects: ['Math', 'Biology', 'History'] },
  { name: 'Charlie', age: 19, grade: 'C', subjects: ['Physics', 'Chemistry', 'Literature'] },
  { name: 'David', age: 22, grade: 'A', subjects: ['Math', 'Physics', 'Literature'] },
  { name: 'Eva', age: 18, grade: 'B', subjects: ['Math', 'Chemistry', 'History'] }
];

console.log(filterStudents(students, { age: { gt: 20 }, subjects: { includes: 'Physics' } }));
console.log(filterStudents(students, { age: { lt: 20 }, grade: { eq: 'A' }, subjects: { includes: 'Math' } }));
console.log(filterStudents(students, { grade: { eq: 'B' }, subjects: { includes: 'History' } }));
console.log(filterStudents(students, { age: { gt: 18 }, grade: { eq: 'C' }, subjects: { includes: 'Physics' } }));
