const Employee = require(`./employee`)

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, id, email),
        this.name = name,
        this.id = id,
        this.email = email,
        this.officeNumber = officeNumber
    }
}
Manager.prototype.getName = function(pass) {
       
    if (typeof pass.name !== 'string' || !pass.name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
          }
          
          return pass.name;
        };

        Manager.prototype.getId = function(pass) {
        
            if (typeof pass.id !== 'number') {
            throw new Error("Expected parameter 'id' to be a non empty number");
          }
        
          return pass.id;
    }
    Manager.prototype.getEmail = function(pass) {
        
        if (typeof pass.email !== 'string' || !pass.email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non empty string");
          }
          pass.email = "mailto:" + pass.email
          return pass.email;
    }

    Manager.prototype.getOfficeNumber = function(pass) {
        return pass.officeNumber
    }


    Manager.prototype.getRole = function(pass) {
        pass.role = `Manager`
        return pass.role
    }

module.exports = Manager;


