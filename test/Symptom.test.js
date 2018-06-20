var axios = require('axios');
var crud = require('./crud');
describe('CRUD Testing', () => {
    const url = `http://localhost:3000`

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
})