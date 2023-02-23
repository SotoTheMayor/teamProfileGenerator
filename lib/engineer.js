const Employee = require(`./employee`)

class Engineer extends Employee {
    constructor(name, email, id, github) {
    super(name, id, email),
    this.name = name,
    this.id = id,
    this.email = email,
    this.github = github
    }
}

    Engineer.prototype.getName = function(pass) {
        
        if (typeof pass.name !== 'string' || !pass.name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
          }

          return pass.name;
        };

    Engineer.prototype.getId = function(pass) {
        
        if (typeof pass.id !== 'number') {
            throw new Error("Expected parameter 'id' to be a non empty number");
          }
        
          return pass.id;
    }

    Engineer.prototype.getEmail = function(pass) {
        
        if (typeof pass.email !== 'string' || !pass.email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non empty string");
          }
          pass.email = "mailto:" + pass.email
          return pass.email;
        }

    Engineer.prototype.getGithub = function(pass) {
        
        if (typeof pass.github !== 'string' || !pass.github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non empty string");
            }
            pass.github = "https://github.com/" + pass.github
            return pass.github;
    };

    Engineer.prototype.getRole = function(pass) {
        
        pass.role = `Engineer`
        return pass.role;
    }



module.exports = Engineer;


