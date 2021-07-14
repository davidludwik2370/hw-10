const Engineer = require('../lib/Engineer.js');

describe('Engineer Test', () => {
    it("should return relevant parameters when called", () => {
        const name = 'Test Name';
        const id = 237;
        const email = 'testEmail@gmail.com';
        const github = 'testGithub237';

        const emp = new Engineer(name, id, email, github);

        expect(emp.getRole()).toEqual('Engineer');
        expect(emp.getName()).toEqual(name);
        expect(emp.getId()).toEqual(id);
        expect(emp.getEmail()).toEqual(email);
        expect(emp.getGithub()).toEqual(github);
    });
});