"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const heroes_1 = require("../controllers/heroes");
const allowableCollections_1 = require("../helpers/allowableCollections");
const files_validation_1 = require("../helpers/files-validation");
const router = (0, express_1.Router)();
router.get('/:publisher', [
    (0, express_validator_1.check)('publisher', 'The field publisher is required').not().isEmpty(),
    (0, express_validator_1.check)('publisher').custom(p => (0, allowableCollections_1.allowableCollections)(p, ['dc', 'marvel'])),
    files_validation_1.fieldsValidation
], heroes_1.getAllHeroesByPublisher);
exports.default = router;
//# sourceMappingURL=heroes.js.map