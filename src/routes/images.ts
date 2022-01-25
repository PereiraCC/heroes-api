import { Router } from 'express';
import { check } from 'express-validator';
import { getImageHero } from '../controllers/images';

import { fieldsValidation } from '../helpers/files-validation';

const router = Router();

router.get('/:id', [
    check('id', 'The field identification is required').not().isEmpty(),
    fieldsValidation
], getImageHero );

export default router;