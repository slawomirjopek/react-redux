import { applyMiddleware } from "redux";
import logger from "redux-logger";

import user from "./user";

const middleware = applyMiddleware(user, logger);

export default middleware;