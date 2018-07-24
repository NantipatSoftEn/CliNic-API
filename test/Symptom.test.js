var axios = require('axios');
var crud = require('./crud');
jest.setTimeout(5000);
describe('CRUD Testing', () => {
    const url = `http://localhost:3001`

    it('getAll have ErrorMessage', async () => {
        const res = await crud.index(`${url}/symptom`);
        //  console.log(res.data);
        expect(res.error).toBe(false);
    });

    it('getAll is Working', async () => {
        const res = await crud.index(`${url}/symptom`);
        console.log(res.status);
        expect(res.status).toBe(200);
    });

    it('getById is Working', async () => {
        const res = await crud.show(`${url}/symptom`, 1);
        console.log(res.status);
        expect(res.data.length).toBe(1);
        expect(res.status).toBe(200);
    });

    var data = {
        symptomname: 'stun jest ',
        other: 'fucking'
    }
    it('Insert is Working', async () => {
        const res = await crud.create(`${url}/symptom`, data);
        console.log(res.status);
        expect(res.status).toBe(200);
    });


    it('edit is Working', async () => {
        const res = await crud.update(`${url}/symptom`, 3, data);
        console.log(res.status);
        expect(res.status).toBe(200);
    });

    it('destroy is Working', async () => {
        const res = await crud.destroy(`${url}/symptom`, 3);
        console.log(res.status);
        expect(res.status).toBe(200);
    });
})