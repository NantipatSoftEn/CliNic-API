var axios = require('axios');
var crud = require('./crud');
jest.setTimeout(5000);
describe('CRUD Testing', () => {
    const url = `http://localhost:3001`

    it('getAll have ErrorMessage', async () => {
        const res = await crud.index(`${url}/reseration`);
        //  console.log(res.data);
        expect(res.error).toBe(false);
    });

    it('getAll is Working', async () => {
        const res = await crud.index(`${url}/reseration`);
        console.log(res.status);
        expect(res.status).toBe(200);
    });

    it('getById is Working', async () => {
        const res = await crud.show(`${url}/reseration`, 1);
        console.log(res.status);
        expect(res.data.length).toBe(1);
        expect(res.status).toBe(200);
    });

    var data = {
        id: '',
        queue: 3,
        userId: 1,
        periodId: 2
    }
    it('Insert is Working', async () => {
        const res = await crud.create(`${url}/reseration`, data);
        console.log(res.status);
        expect(res.status).toBe(200);
    });


    it('edit is Working', async () => {
        const res = await crud.update(`${url}/reseration`, 2, data);
        console.log(res.status);
        expect(res.status).toBe(200);
    });

    it('destroy is Working', async () => {
        const res = await crud.destroy(`${url}/reseration`, 4);
        console.log(res.status);
        expect(res.status).toBe(200);
    });
})