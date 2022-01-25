"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const images_1 = require("../controllers/images");
const files_validation_1 = require("../helpers/files-validation");
const router = (0, express_1.Router)();
router.get('/:id', [
    (0, express_validator_1.check)('id', 'The field identification is required').not().isEmpty(),
    files_validation_1.fieldsValidation
], images_1.getImageHero);
exports.default = router;
//# sourceMappingURL=images.js.map