import * as mocha from 'mocha';
import request from 'supertest';

const API : string = 'http://localhost:3031';

mocha.describe('GET /api/images/:id', () => {

    mocha.it( 'Get a image of hero', done => {

        request(API)
            .get( '/api/images/dc-batman')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'image/jpeg')
            .expect(200)
            .end(err => {
                if(err) return done(err);
                done();
            });
    });

    mocha.it( 'Validation of hero id', done => {

        request(API)
            .get( '/api/images/marvel123')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(404)
            .expect({
                "msg": "Hero not found"
            })
            .end(err => {
                if(err) return done(err);
                done();
            });
    });

});
