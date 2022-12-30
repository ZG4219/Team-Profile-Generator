const Intern = require('../lib/Intern')

const ashley = new Intern('ashley',114256,'ashley@gmail.com','University of the Philippines')


test('checks if the name exists ', () => {
  expect(ashley.getName()).toBe('ashley');

});

test('checks if role is Intern',() =>{
  expect(ashley.getRole()).toBe('Intern');
})


test('checks if the id is accurate ', () => {
  expect(ashley.getId()).toBe(114256)
  });

test('checks if the email is accurate ', () => {
  expect(ashley.getEmail()).toBe('ashley@gmail.com');

  });

test('checks if the school is accurate ', () => {
  expect(ashley.getSchool()).toBe('University of the Philippines');

  });

test('should get the questions for all interns', () => {
  const internQuestions = [
    {
        type : 'input',
        name : 'name',
        message: `Enter the team Intern's name`
    },
    {
        type : 'input',
        name : 'id',
        message: 'Enter a your employee ID'

    },
    {
        type : 'input',
        name : 'email',
        message: 'Enter you email address'

    },
    {
      type : 'input',
      name : 'school',
      message: 'school'
  }    
]
  expect(ashley.getQuestions()).toEqual(internQuestions)
})