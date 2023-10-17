import { Router, Request, Response } from "express";
import { Wallet } from "../models/wallet";
import { createWalletValidation } from "../validators/wallets";
import { validationResult } from "express-validator";

const router = Router();

router.post("/", createWalletValidation, (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const wallet: Wallet = {
        id: 1,
        name: req.body.name,
        balance: 0,
        user: req.body.user,
    };
    res.status(201).json(wallet);
});

export default router;
