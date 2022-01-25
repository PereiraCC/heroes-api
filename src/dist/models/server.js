"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const heroes_1 = __importDefault(require("../routes/heroes"));
const images_1 = __importDefault(require("../routes/images"));
class Server {
    constructor() {
        this.apiPaths = {
            heroes: '/api/heroes',
            images: '/api/images'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3031';
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server run in port ' + this.port);
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.heroes, heroes_1.default);
        this.app.use(this.apiPaths.images, images_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map