"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha = __importStar(require("mocha"));
const supertest_1 = __importDefault(require("supertest"));
const API = 'http://localhost:3031';
mocha.describe('GET /api/heroes/:publisher', () => {
    mocha.it('Get all heroes by publisher', done => {
        (0, supertest_1.default)(API)
            .get('/api/heroes/dc')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(err => {
            if (err)
                return done(err);
            done();
        });
    });
    mocha.it('Validation of publisher in allowed in collection', done => {
        (0, supertest_1.default)(API)
            .get('/api/heroes/marvel123')
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
            if (err)
                return done(err);
            done();
        });
    });
});
mocha.describe('GET /api/heroes/:publisher/:id', () => {
    mocha.it('Get a hero by Id', done => {
        (0, supertest_1.default)(API)
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
            .end(err => {
            if (err)
                return done(err);
            done();
        });
    });
    mocha.it('Validation not found hero', done => {
        (0, supertest_1.default)(API)
            .get('/api/heroes/marvel/batman')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(404)
            .expect({
            "msg": "No hero found"
        })
            .end(err => {
            if (err)
                return done(err);
            done();
        });
    });
});
//# sourceMappingURL=heroes.test.js.map