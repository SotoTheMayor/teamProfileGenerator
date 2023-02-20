const Employee = require(`./employee`)

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    this.name = name,
    this.id = id,
    this.email = email,
    this.officeNumber = officeNumber
    }
}
Manager.prototype.getName = function(pass) {
    super.Manager.prototype.getName()    
    if (typeof pass !== 'string' || !pass.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
          }
          
          return pass;
        };

        Manager.prototype.getId = function(pass) {
        super.Manager.prototype.getEmail()
            if (typeof pass !== 'number' || !pass.trim().length) {
            throw new Error("Expected parameter 'id' to be a non empty number");
          }
        
          return pass;
    }
    Manager.prototype.getEmail = function(pass) {
        super.Manager.prototype.getEmail()
        if (typeof pass !== 'string' || !pass.trim().length) {
            throw new Error("Expected parameter 'email' to be a non empty string");
          }
          pass = "mailto:" + pass
          return pass;
    }
    Manager.prototype.getRole = function(pass) {
        super.Manager.prototype.getRole()
        pass = `Manager`
        return pass
    }

module.exports = Manager;


