const Intern = require(`../lib/intern.js`);
// const { describe } = require("test");

describe('Intern', () => {
    describe('Initialization', () => {
        //Positive test
    it('should accept input on name and return the information in an object', () => {
        //Arrange
        const pass = `Jason`;
        //Act
        const result = new Intern().getName(pass)
         //Assert
        expect(result).toBe(`Jason`);
    })
    it('should accept input on employee ID and return the information in an object', () => {
        expect(intern()).toBe(``);
    })
    it('should accept input on email and return the information in an object', () => {
        expect(intern()).toBe(``);
    })
    it('should accept input on office number and return the information in an object', () => {
        expect(intern()).toBe(``);
    })
})
})