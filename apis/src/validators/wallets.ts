import { body } from "express-validator";

export const createWalletValidation = [body("name").notEmpty().withMessage("Name is required")];
