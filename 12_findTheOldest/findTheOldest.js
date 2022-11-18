const findTheOldest = function(people) {
  oldest = 0;
  let oldestPerson;
  people.forEach((person) => {
    age = person.yearOfDeath - person.yearOfBirth;
    if (oldest < age) {
      oldest = age;
      oldestPerson = person;
    }
  })
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
