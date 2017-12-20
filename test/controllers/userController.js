const supertest = require('supertest'),
    app = require('../../app')
const mongodb = require('../../config/mongodb-config.js')
const cheerio = require('cheerio')

let server = app.listen();
const req = supertest.agent(server)

describe('#test UserController', () => {
    before(() => {

    });

    after(() => {
        mongodb.disconnect();
        server.close()
    });

    describe('#GET /login', () => {
        let csrf
        it('#should return 200', async () => {
            let res = await req
                .get('/login')
                .expect('Content-Type', /text\/html/)
                .expect(200);
            let $html = cheerio(res.text);
            csrf = $html.find('input[name=_csrf]').val();
        });


        describe('#POST /login', () => {
            it('#should return 200', async () => {
                await req
                    .post('/login')
                    .send({
                        _csrf: csrf,
                        username: 'stutter',
                        password: '123'
                    })
                    //to do
                    .expect(200);
            });
        });
    });



    describe('#GET /logout', () => {
        it('#should return 200', async () => {
            await req
                .get('/logout')
                .expect('Content-Type', /text\/html/)
                .expect(302);
        });
    });

});