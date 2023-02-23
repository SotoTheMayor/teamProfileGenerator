//main constructor class
    class Employee {
        constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
        }
    }
    Employee.prototype.getName = function(pass) {
            if (typeof pass !== 'string' || !pass.trim().length) {
                throw new Error("Expected parameter 'name' to be a non empty string");
              }
            
              return pass;
            };

    Employee.prototype.getId = function(pass) {
            if (typeof pass !== 'number') {
                throw new Error("Expected parameter 'id' to be a non empty number");
              }
              
              return pass;
        }
    Employee.prototype.getEmail = function(pass) {
            if (typeof pass !== 'string' || !pass.trim().length) {
                throw new Error("Expected parameter 'email' to be a non empty string");
              }
              pass = "mailto:" + pass
              return pass;
        }

    Employee.prototype.getRole = function(pass) {
            pass = `Employee`
            return pass;
        }
    



    module.exports = Employee;


