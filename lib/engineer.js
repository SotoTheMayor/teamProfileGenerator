const Employee = require(`./employee`)

class Engineer extends Employee {
    constructor(name, id, email, github) {
    this.name = name,
    this.id = id,
    this.email = email,
    this.github = github
    }
}

    Engineer.prototype.getName = function(pass) {
        super.Engineer.prototype.getName();
        if (typeof pass !== 'string' || !pass.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
          }

          return pass;
        };

    Engineer.prototype.getId = function(pass) {
        super.Engineer.prototype.getId()
        if (typeof pass !== 'number' || !pass.trim().length) {
            throw new Error("Expected parameter 'id' to be a non empty number");
          }
        
          return pass;
    }

    Engineer.prototype.getEmail = function(pass) {
        super.Engineer.prototype.getEmail();
        if (typeof pass !== 'string' || !pass.trim().length) {
            throw new Error("Expected parameter 'email' to be a non empty string");
          }
          pass = "mailto:" + this.email
          return pass;
        }

    Engineer.prototype.getGithub = function(pass) {
        super.Engineer.prototype.getGithub()
        if (typeof pass !== 'string' || !pass.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
            }
            pass = "https://github.com/" + pass
            return pass;
    };

    Engineer.prototype.getRole = function(pass) {
        super.Engineer.prototype.getRole()
        pass = `Engineer`
        return pass;
    }



module.exports = Engineer;


