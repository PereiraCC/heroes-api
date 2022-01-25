import { Request, Response } from 'express';

import { heroes } from '../data/heroes';

type dataHero = [{
    id : string,
    superhero : string,
    publisher : string,
    alter_ego : string,
    first_appearance : string,
    characters : string,
}]


export const getAllHeroesByPublisher = (req: Request, res: Response) => {

    let { publisher } = req.params;
    
    try {

        publisher = ( publisher === 'dc' ) ? 'DC Comics' : 'Marvel Comics';
        const data : dataHero = heroes.filter(hero => hero.publisher === publisher) as dataHero;

        res.status(200).json({
            ok: true,
            length: data.length,
            data
        });
        
    } catch (err) {

        console.log(`Error in getAllHeroesByPublisher: ${err}`);
        return res.status(500).json({
            ok: false,
            msg: 'Error: get all heroes by publisher'
        });
    }


};