const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);


describe('APIServer', () => {
  it('handle roo path', async() => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toBe('Howdy Yall!!!!!');
  });
});



