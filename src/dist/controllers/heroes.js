"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroById = exports.getAllHeroesByPublisher = void 0;
const heroes_1 = require("../data/heroes");
const getAllHeroesByPublisher = (req, res) => {
    let { publisher } = req.params;
    try {
        publisher = (publisher === 'dc') ? 'DC Comics' : 'Marvel Comics';
        const data = heroes_1.heroes.filter(hero => hero.publisher === publisher);
        if (data.length < 0) {
            return res.status(404).json({
                msg: 'No heroes found'
            });
        }
        return res.status(200).json({
            ok: true,
            length: data.length,
            heroes: data
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
const getHeroById = (req, res) => {
    let { publisher, id } = req.params;
    try {
        publisher = (publisher === 'dc') ? 'DC Comics' : 'Marvel Comics';
        const data = heroes_1.heroes.find(hero => hero.id === id && hero.publisher === publisher);
        if (data === undefined) {
            return res.status(404).json({
                msg: 'No hero found'
            });
        }
        return res.status(200).json({
            ok: true,
            hero: data
        });
    }
    catch (err) {
        console.log(`Error in getHeroById ${err}`);
        return res.status(500).json({
            msg: 'Error in get Hero By Id',
        });
    }
};
exports.getHeroById = getHeroById;
//# sourceMappingURL=heroes.js.map