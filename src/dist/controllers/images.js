"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageHero = void 0;
const heroes_1 = require("../data/heroes");
const getImageHero = (req, res) => {
    const { id } = req.params;
    try {
        if (heroes_1.heroes.find(hero => hero.id === id) === undefined) {
            return res.status(404).json({
                msg: 'Hero not found'
            });
        }
        return res.sendFile(__dirname + `/assets/${id}.jpg`);
    }
    catch (err) {
        console.log(`Error in getImageHero ${err}`);
        return res.status(500).json({
            msg: 'Error in get image hero'
        });
    }
};
exports.getImageHero = getImageHero;
//# sourceMappingURL=images.js.map