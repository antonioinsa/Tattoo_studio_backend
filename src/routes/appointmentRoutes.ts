import { Router } from "express";
import { createAppointment, updateAppointmentById, deleteAppointmentById, workerUpdateAppointmentById } from "../controllers/appointmentController";
import { authUser } from "../middlewares/authUser";
//import { authSuperAdmin } from "../middlewares/authSuperAdmin";


const router = Router()
router.post('/create', authUser, createAppointment)
router.put('/update', authUser, updateAppointmentById)
router.delete('/delete', authUser, deleteAppointmentById)
router.put('/workerupdate', authUser, workerUpdateAppointmentById)

export { router }