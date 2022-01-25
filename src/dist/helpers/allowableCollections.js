"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowableCollections = void 0;
const allowableCollections = (collection = '', collections = []) => {
    const included = collections.includes(collection);
    if (!included) {
        throw new Error(`The collection: ${collection} is not allowed, Collections: ${collections}`);
    }
    return true;
};
exports.allowableCollections = allowableCollections;
//# sourceMappingURL=allowableCollections.js.map