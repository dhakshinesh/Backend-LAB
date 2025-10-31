const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('To-Do List API', () => {
  it('should return an empty array initially', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array').that.is.empty;
  });

  it('should add a new todo', async () => {
    const res = await request(app).post('/todos').send({ task: 'Write tests' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('task', 'Write tests');
  });

  it('should fail if task is missing', async () => {
    const res = await request(app).post('/todos').send({});
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('error');
  });
});
