import path from "path";
import * as OpenApiValidator from "express-openapi-validator";

const spec = path.join("assets", "openapi.json");

export const validateInputs = OpenApiValidator.middleware({
    apiSpec: spec,
    validateRequests: true,
    validateResponses: true,
});