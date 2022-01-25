import * as mocha from 'mocha';
import request from 'supertest';

const API : string = 'http://localhost:3031';

mocha.describe('GET /api/heroes/:publisher', () => {

    mocha.it( 'Get all heroes by publisher', done => {

        request(API)
            .get( '/api/heroes/dc')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(err => {
                if(err) return done(err);
                done();
            });
    });

    mocha.it( 'Validation of publisher in allowed in collection', done => {

        request(API)
            .get( '/api/heroes/marvel123')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(400)
            .expect({
                "errors": [
                    {
                        "value": "marvel123",
                        "msg": "The collection: marvel123 is not allowed, Collections: dc,marvel",
                        "param": "publisher",
                        "location": "params"
                    }
                ]
            })
            .end(err => {
                if(err) return done(err);
                done();
            });
    });

});

mocha.describe('GET /api/heroes/:publisher/:id', () => {

    mocha.it('Get a hero by Id', done => {

        request(API)
            .get('/api/heroes/marvel/marvel-spider')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .expect({
                "ok": true,
                "hero": {
                    "id": "marvel-spider",
                    "superhero": "Spider Man",
                    "publisher": "Marvel Comics",
                    "alter_ego": "Peter Parker",
                    "first_appearance": "Amazing Fantasy #15",
                    "characters": "Peter Parker"
                }
            })
            .end( err => {
                if(err) return done(err);
                done();
            });
    });

    mocha.it('Validation not found hero', done => {

        request(API)
            .get('/api/heroes/marvel/batman')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(404)
            .expect({
                "msg": "No hero found"
            })
            .end( err => {
                if(err) return done(err);
                done();
            });
    });

});
