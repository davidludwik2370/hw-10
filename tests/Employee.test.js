const Employee = require('../lib/Employee.js');

describe('Employee Test', () => {
    it("should return relevant parameters when called", () => {
      const name = 'Test Name';
      const id = 237;
      const email = 'testEmail@gmail.com';

      const emp = new Employee(name, id, email);

      expect(emp.getRole()).toEqual('Employee');
      expect(emp.getName()).toEqual(name);
      expect(emp.getId()).toEqual(id);
      expect(emp.getEmail()).toEqual(email);
    });
});