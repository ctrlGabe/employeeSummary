// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, id, email, phone) {
      this.name = name;
      this.role = "Manager";
      this.id = id;
      this.email = email;
      this.phone = phone;
    }
}

module.exports = Manager;