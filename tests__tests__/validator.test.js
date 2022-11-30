'use strict';

const validator = require('../src/middleware/validator.js');

describe('validator middleware', () => {

  // let req = {query: {name: 'Jim'}};
  // let res = {};
  // let next = jest.fn();

  it('checks if the query is a character not an integrer', () => {
    let req = {query: {name: 'Jim'}};
    let res = {};
    let next = jest.fn();
    validator(req, res, next);
    expect(req.query.name).toEqual('Jim');
  });

  it('call next as expected', () => {
    let req = {query: {name: 'Jim'}};
    let res = {};
    let next = jest.fn();
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
    expect(next).not.toHaveBeenCalledWith('this should not work');
  });


  it('call next with error as expected', () => {
    let req = {query: {notName: 'Jim'}};
    let res = {};
    let next = jest.fn();
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('Error no name available');
    expect(next).not.toHaveBeenCalledWith();
  });
});
