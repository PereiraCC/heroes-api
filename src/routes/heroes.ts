import { Router } from 'express';
import { check } from 'express-validator';

import { getAllHeroesByPublisher } from '../controllers/heroes';
import { allowableCollections } from '../helpers/allowableCollections';
import { fieldsValidation } from '../helpers/files-validation';

const router = Router();

router.get('/:publisher', [
    check('publisher', 'The field publisher is required').not().isEmpty(),
    check('publisher').custom( p =>  allowableCollections( p, ['dc', 'marvel'] )),
    fieldsValidation
], getAllHeroesByPublisher );

export default router;
