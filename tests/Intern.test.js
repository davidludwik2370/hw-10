const Intern = require('../lib/Intern.js');

describe('Intern Test', () => {
    it("should return relevant parameters when called", () => {
        const name = 'Test Name';
        const id = 237;
        const email = 'testEmail@gmail.com';
        const school = 'Harvard';

        const emp = new Intern(name, id, email, school);

        expect(emp.getRole()).toEqual('Intern');
        expect(emp.getName()).toEqual(name);
        expect(emp.getId()).toEqual(id);
        expect(emp.getEmail()).toEqual(email);
        expect(emp.getSchool()).toEqual(school);
    });
});