const Intern = require(`../lib/intern.js`);
// const { describe } = require("test");

describe('Intern', () => {
    describe('Initialization', () => {
        //Positive test
    it('should accept input on name, create an object property titled "name" and return the information in a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            school: 'UMN'
        };
        //Act
        const result = new Intern().getName(pass)
        //Assert
        expect(result).toBe(`Jason`);
    })
    it('should accept input on employee ID, create an object property titled "id" and return the information in a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            school: 'UMN'
        };
        //Act
        const result = new Intern().getId(pass)
        //Assert
        expect(result).toBe(23);
    })
    it('should accept input on email, create an object with the property "email" and return the information in a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            school: 'UMN'
        };
        //Act
        const result = new Intern().getEmail(pass)
        //Assert
        expect(result).toBe(`mailto:jason@email.com`);
    })
    it('should accept input on school, set it as a property in an object and return the information as a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            school: 'UMN'
        };
        //Act
        const result = new Intern().getSchool(pass)
        //Assert
        expect(result).toBe('UMN');
    })
})
})