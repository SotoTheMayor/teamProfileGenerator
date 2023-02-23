const Engineer = require(`../lib/engineer.js`);
// const { describe } = require("test");

describe('Engineer', () => {
    describe('Initialization', () => {
        //Positive test
    it('should accept input on name, create an object property titled "name" and return the information in a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            github: 'SotoTheMayor'
        };
        //Act
        const result = new Engineer().getName(pass)
        //Assert
        expect(result).toBe(`Jason`);
    })
    it('should accept input on employee ID, create an object property titled "id" and return the information in a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            github: 'SotoTheMayor'
        };
        //Act
        const result = new Engineer().getId(pass)
        //Assert
        expect(result).toBe(23);
    })
    it('should accept input on email, create an object with the property "email" and return the information in a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            github: 'SotoTheMayor'
        };
        //Act
        const result = new Engineer().getEmail(pass)
        //Assert
        expect(result).toBe(`mailto:jason@email.com`);
    })
    it('should accept input on github and return the information as a url in a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            github: 'SotoTheMayor'
        };
        //Act
        const result = new Engineer().getGithub(pass)
        //Assert
        expect(result).toBe('https://github.com/SotoTheMayor');
    })
})
})