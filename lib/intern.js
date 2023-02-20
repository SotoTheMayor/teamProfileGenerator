const Employee = require(`./employee`)

class Intern extends Employee {
    constructor(name, id, email, school) {
    this.name = name,
    this.id = id,
    this.email = email,
    this.school = school
    }
}
    Intern.prototype.getName = function(pass) {
        super.Intern.prototype.getName()
        if (typeof pass !== 'string' || !pass.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
          }
          
          return pass;
        };

        Intern.prototype.getId = function(pass) {
        super.Intern.prototype.getId()
            if (typeof pass !== 'number' || !pass.trim().length) {
            throw new Error("Expected parameter 'id' to be a non empty number");
          }

          return pass;
    }
    Intern.prototype.getEmail = function(pass) {
        super.Intern.prototype.getEmail()
        if (typeof pass !== 'string' || !pass.trim().length) {
            throw new Error("Expected parameter 'email' to be a non empty string");
          }
          pass = "mailto:" + pass
          return pass;
    }

    Intern.prototype.getSchool = function(pass) {
        super.Intern.prototype.getSchool()
        return pass
    }

    Intern.prototype.getRole = function(pass) {
        super.Intern.prototype.getRole()
        pass = `Intern`
        return pass;
    }


module.exports = Intern;