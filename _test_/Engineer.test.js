const Engineer = require('../lib/Engineer')

const sam = new Engineer('sam',114256,'sam@gmail.com','Sammy')



 test('checks if the name exists ', () => {
    expect(sam.getName()).toBe('sam');

  });

  test('checks if role is Engineer',() =>{
    expect(sam.getRole()).toBe('Engineer');
  })

  
  test('checks if the id is accurate ', () => {
    expect(sam.getId()).toBe(114256)
    });

  test('checks if the email is accurate ', () => {
    expect(sam.getEmail()).toBe('sam@gmail.com');

    });

  test('checks if the github is accurate ', () => {
    expect(sam.getGithub()).toBe('Sammy');

    });

  test('should get the questions for all engineers', () => {
    const engineerQuestions = [
      {
          type : 'input',
          name : 'name',
          message: `Enter the team Engineer's name`
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
        name : 'github',
        message: 'Enter your  github username'
    }    
  ]
    expect(sam.getQuestions()).toEqual(engineerQuestions)
  })