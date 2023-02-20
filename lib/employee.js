
    class Employee {
        constructor(data) {
        this.name = data.name,
        this.id = data.id,
        this.email = data.email
        }
        getName() {
            if (typeof this.name !== 'string' || !this.name.trim().length) {
                throw new Error("Expected parameter 'name' to be a non empty string");
              }
              name = this.name
              return name;
            };

        getId() {
            if (typeof this.id !== 'number' || !this.id.trim().length) {
                throw new Error("Expected parameter 'id' to be a non empty number");
              }
              id = this.id
              return id;
        }
        getEmail() {
            if (typeof this.email !== 'string' || !this.email.trim().length) {
                throw new Error("Expected parameter 'email' to be a non empty string");
              }
              email = "mailto:" + this.email
              return email;
        }

        getRole() {
            role = `Employee`
            return role;
        }
    }

    module.exports = Employee;


