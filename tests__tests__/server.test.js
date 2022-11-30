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

  it('works with query params', async() => {
    const response = await request.get('/person?name=Ryan');

    expect(response.text).toEqual('{"name": "Ryan"}');
  });

  it('works with path params', async() => {
    const response = await request.get('/helloPath/Lucky');

    expect(response.text).toEqual('Howdy Lucky');
  });

  it('sends a 404 status when on a bad route', async() => {
    const response = await request.get('/badroute');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Not Found');
  });

  it('sends a 500 status when the query string is empty', async() => {
    const response = await request.get('/person?');
    expect(response.status).toBe(500);
  });
});



