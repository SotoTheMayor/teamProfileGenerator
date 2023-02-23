
const Employee = require(`../lib/employee.js`);



describe('Employee', () => {
    describe('Initialization', () => {
        //Positive test
    it('should accept input on name, create an object property titled "name" and return the information in a class', () => {
        //Arrange
        const pass = `Jason`;
        //Act
        const result = new Employee().getName(pass)
        //Assert
        expect(result).toBe(`Jason`);
    })
    it('should accept input on employee ID, create an object property titled "id" and return the information in a class', () => {
        //Arrange
        const pass = 23;
        //Act
        const result = new Employee().getId(pass)
        //Assert
        expect(result).toBe(23);
    })
    it('should accept input on email, create an object with the property "email" and return the information in a class', () => {
        //Arrange
        const pass = `jason@email.com`;
        //Act
        const result = new Employee().getEmail(pass)
        //Assert
        expect(result).toBe(`mailto:jason@email.com`);
    })
})
})