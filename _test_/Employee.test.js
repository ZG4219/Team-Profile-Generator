const Employee = require('../lib/Employee')


const zoe = new Employee('zoe',11332567,'zoe@gmail.com');



 test('checks if the name exists ', () => {
    expect(zoe.getName()).toBe('zoe');

  });

  test('checks if role is employee',() =>{
    expect(zoe.getRole()).toBe('Employee');
  })

  
  test('checks if the id is accurate ', () => {
    expect(zoe.getId()).toBe(11332567)
    });

  test('checks if the email is accurate ', () => {
    expect(zoe.getEmail()).toBe('zoe@gmail.com');

    });

  test('should get the questions for all employees', () => {
    const employeeQuestions = [
      {
          type : 'input',
          name : 'name',
          message: `Enter the team Employee's name`
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
  
      }  
  ]
    expect(zoe.getQuestions()).toEqual(employeeQuestions)
  })
