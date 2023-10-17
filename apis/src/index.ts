import express, { Request, Response } from "express";
import walletRoutes from "./routes/wallets";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use("/wallets", walletRoutes); // Add this line to mount the Task API routes

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
