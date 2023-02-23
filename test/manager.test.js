const Manager = require(`../lib/manager.js`);
// const { describe } = require("test");

describe('Manager', () => {
    describe('Initialization', () => {
        //Positive test
    it('should accept input on name, create an object property titled "name" and return the information in a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            officeNumber: 'A12'
        };
        //Act
        const result = new Manager().getName(pass)
        //Assert
        expect(result).toBe(`Jason`);
    })
    it('should accept input on employee ID, create an object property titled "id" and return the information in a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            officeNumber: 'A12'
        };
        //Act
        const result = new Manager().getId(pass)
        //Assert
        expect(result).toBe(23);
    })
    it('should accept input on email, create an object with the property "email" and return the information in a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            officeNumber: 'A12'
        };
        //Act
        const result = new Manager().getEmail(pass)
        //Assert
        expect(result).toBe(`mailto:jason@email.com`);
    })
    it('should accept input on office number, pass it as a property in an objeect and return the information in a class', () => {
        //Arrange
        const pass = {
            name: 'Jason',
            id: 23,
            email: `jason@email.com`,
            officeNumber: 'A12'
        };
        //Act
        const result = new Manager().getOfficeNumber(pass)
        //Assert
        expect(result).toBe('A12');
    })
})
})