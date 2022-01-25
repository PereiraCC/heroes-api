import { Router } from 'express';
import { check } from 'express-validator';

import { getAllHeroesByPublisher, getHeroById } from '../controllers/heroes';
import { allowableCollections } from '../helpers/allowableCollections';
import { fieldsValidation } from '../helpers/files-validation';

const router = Router();

router.get('/:publisher', [
    check('publisher', 'The field publisher is required').not().isEmpty(),
    check('publisher').custom( p =>  allowableCollections( p, ['dc', 'marvel'] )),
    fieldsValidation
], getAllHeroesByPublisher );

router.get('/:publisher/:id', [
    check('publisher', 'The field publisher is required').not().isEmpty(),
    check('id', 'The field identification is required').not().isEmpty(),
    check('publisher').custom( p =>  allowableCollections( p, ['dc', 'marvel'] )),
    fieldsValidation
], getHeroById );

export default router;
