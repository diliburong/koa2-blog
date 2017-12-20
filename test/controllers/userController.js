const supertest = require('supertest'),
app = require('../../app')
const mongodb = require('../../config/default.js')

let server = app.listen();
const req = supertest.agent(server)

describe('#test UserController', () => {
    
        describe('#GET /json', () => {
    
            it('#should return 200', async () => {
                    await req
                    .get('/json')
                    .expect('Content-Type', /application\/json/)
                    .expect(200);
            });
        });
        

        // CLOSE ALL
        mongodb.disconnect();
        server.close()
    });