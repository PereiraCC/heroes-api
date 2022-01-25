"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllHeroesByPublisher = void 0;
const heroes_1 = require("../data/heroes");
const getAllHeroesByPublisher = (req, res) => {
    let { publisher } = req.params;
    try {
        publisher = (publisher === 'dc') ? 'DC Comics' : 'Marvel Comics';
        const data = heroes_1.heroes.filter(hero => hero.publisher === publisher);
        res.status(200).json({
            ok: true,
            length: data.length,
            data
        });
    }
    catch (err) {
        console.log(`Error in getAllHeroesByPublisher: ${err}`);
        return res.status(500).json({
            ok: false,
            msg: 'Error: get all heroes by publisher'
        });
    }
};
exports.getAllHeroesByPublisher = getAllHeroesByPublisher;
//# sourceMappingURL=heroes.js.map