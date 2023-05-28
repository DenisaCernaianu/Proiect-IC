import express from "express";

import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import { createBooking, getBooking, getAllBooking } from "../controllers/bookingController.js";

const router = express.Router()

router.post("/", verifyUser, createBooking);
router.get("/:id", getBooking);
//router.get('/', verifyAdmin, getAllBooking);
router.get("/", getAllBooking);

export default router;