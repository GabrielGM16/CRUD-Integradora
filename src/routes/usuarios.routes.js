import { Router } from "express";
import * as usuarioCrl from "../controllers/Usuarios.controller"

const router = Router();

router.post('/', usuarioCrl.addUser)
router.post('/login/', usuarioCrl.login)
router.post('/rol/:email', usuarioCrl.updateRol)

export default router;