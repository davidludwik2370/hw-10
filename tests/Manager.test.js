const Manager = require('../lib/Manager.js');

describe('Manager Test', () => {
    it("should return relevant parameters when called", () => {
        const name = 'Test Name';
        const id = 237;
        const email = 'testEmail@gmail.com';
        const officeNum = 12;

        const emp = new Manager(name, id, email, officeNum);

        expect(emp.getRole()).toEqual('Manager');
        expect(emp.getName()).toEqual(name);
        expect(emp.getId()).toEqual(id);
        expect(emp.getEmail()).toEqual(email);
        expect(emp.getOfficeNumber()).toEqual(officeNum);
    });
});