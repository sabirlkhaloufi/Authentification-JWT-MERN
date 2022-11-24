const request = require('supertest')
const app = require('../app.js')


describe('login user', () => {
  it('should login', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: "khalid@gmail.com",
        password: 'khalid',
        
      })

    expect(res.status).toEqual(200)
    // expect(res.body).toHaveProperty('post')
  })
})


describe('register user', () => {
    it('should register', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: "khalid",  
          email: "khalid@gmail.com",
          password: 'khalid',
          role: "client"
        })
  
      expect(res.status).toEqual(400)
      // expect(res.body).toHaveProperty('post')
    })
  })