import request from 'supertest';
import app from '../server'


describe('should test server configuration', () => {
  it('should run the express server', async() => {
    const res= await request(app).get('/api/getPayload');
    expect(res.statusCode).toEqual(200);
  });
});
