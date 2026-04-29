import express from 'express';
import { handelversion1 } from '../../controller/handel.version1.js';
const v1Router = express.Router();
v1Router.get("/v1", handelversion1);
export default v1Router;
//# sourceMappingURL=route.version1.js.map