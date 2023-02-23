const Employee = require(`./employee`)

class Intern extends Employee {
    constructor(name, email, id, school) {
    super(name, id, email),
    this.name = name,
    this.id = id,
    this.email = email,
    this.school = school
    }
}
    Intern.prototype.getName = function(pass) {
        
        if (typeof pass.name !== 'string' || !pass.name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
          }
          
          return pass.name;
        };

        Intern.prototype.getId = function(pass) {
        
            if (typeof pass.id !== 'number') {
            throw new Error("Expected parameter 'id' to be a non empty number");
          }

          return pass.id;
    }
    Intern.prototype.getEmail = function(pass) {
        
        if (typeof pass.email !== 'string' || !pass.email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non empty string");
          }
          pass.email = "mailto:" + pass.email
          return pass.email;
    }

    Intern.prototype.getSchool = function(pass) {
        return pass.school
    }

    Intern.prototype.getRole = function(pass) { 
        pass.role = `Intern`
        return pass.role;
    }


module.exports = Intern;