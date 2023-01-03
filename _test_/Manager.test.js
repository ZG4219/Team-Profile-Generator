const Manager = require('../lib/Manager')

const jayar = new Manager('jayar',800726,'jayar@gmail.com',9168950442)


test('checks if the name exists ', () => {
  expect(jayar.getName()).toBe('jayar');

});

test('checks if role is Manager',() =>{
  expect(jayar.getRole()).toBe('Manager');
})


test('checks if the id is accurate ', () => {
  expect(jayar.getId()).toBe(800726)
  });

test('checks if the email is accurate ', () => {
  expect(jayar.getEmail()).toBe('jayar@gmail.com');

  });

test('checks if the office number is accurate ', () => {
  expect(jayar.officeNumber).toBe(9168950442);

  });

test('should get the questions for all managers', () => {
  const managerQuestions = [
    {
        type : 'input',
        name : 'name',
        message: `Enter the team Manager's name`
    },
    {
        type : 'input',
        name : 'id',
        message: 'Enter a your employee ID'

    },
    {
        type : 'input',
        name : 'email',
        message: 'Enter your email address'

    },
    {
      type : 'input',
      name : 'officeNumber',
      message: 'Enter your  office number'
  }    
]
  expect(jayar.questions).toEqual(managerQuestions)
})