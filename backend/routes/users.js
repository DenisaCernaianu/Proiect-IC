import express from "express"
import {updateUser, deleteUser, getSingleUser, getAllUsers, createUser} from "./../controllers/userController.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

router.post("/", createUser)
// update tour
router.put("/:id", updateUser);

// delete tour

router.delete("/:id",deleteUser);

// get single tour
router.get("/:id", verifyUser, getSingleUser);

// get all tours

//router.get("/",verifyAdmin, getAllUsers);
router.get("/", getAllUsers);

export default router
