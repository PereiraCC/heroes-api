import { Request, Response } from 'express';

import { heroes } from '../data/heroes';

type dataHero = {
    id : string,
    superhero : string,
    publisher : string,
    alter_ego : string,
    first_appearance : string,
    characters : string,
}


export const getAllHeroesByPublisher = (req: Request, res: Response) => {

    let { publisher } = req.params;
    
    try {

        publisher = ( publisher === 'dc' ) ? 'DC Comics' : 'Marvel Comics';
        const data : dataHero[] = heroes.filter(hero => hero.publisher === publisher) as dataHero[];

        if( data.length < 0 ) {
            return res.status(404).json({
                msg: 'No heroes found'
            });
        }

        return res.status(200).json({
            ok: true,
            length: data.length,
            heroes: data
        });
        
    } catch (err) {

        console.log(`Error in getAllHeroesByPublisher: ${err}`);
        return res.status(500).json({
            ok: false,
            msg: 'Error: get all heroes by publisher'
        });
    }


};

export const getHeroById = (req: Request, res: Response) => {

    let { publisher, id } = req.params;

    try {
        
        publisher = ( publisher === 'dc' ) ? 'DC Comics' : 'Marvel Comics';
        const data : dataHero = heroes.find(hero => hero.id === id && hero.publisher === publisher) as dataHero;

        if(data === undefined) {
            return res.status(404).json({
                msg: 'No hero found'
            });
        }

        return res.status(200).json({
            ok: true,
            hero: data
        });

    } catch (err) {

        console.log(`Error in getHeroById ${err}`);
        return res.status(500).json({
            msg: 'Error in get Hero By Id',
        });

    }
}