const service = require('./../service/UserServices');


test('adds 1 + 2 to equal 3', () => {
    const res =  service.index();
    expect(res.statusCode).toBe(200);
  });
