import { Request, Response } from 'express';

import { heroes } from '../data/heroes';

export const getImageHero = (req: Request, res: Response) => {

    const { id } = req.params;
    
    try {
        
        if( heroes.find(hero => hero.id === id) === undefined ){
            return res.status(404).json({
                msg: 'Hero not found'
            });
        }

        return res.sendFile( __dirname + `/assets/${ id }.jpg`);

    } catch (err) {
        console.log(`Error in getImageHero ${err}`);
        return res.status(500).json({
            msg: 'Error in get image hero'
        })
    }

}