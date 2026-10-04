import { Router } from "express";
import authService from "./auth.servise";
// import User from "@/Api/Auth/user";
const router = Router();
router.post('/login', async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const result = await authService.loginService(userName, password);
    return result;

})
export default router;