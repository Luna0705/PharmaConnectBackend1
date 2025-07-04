import express from "express";
import { appointmentController } from "../controllers/appointmentController.js";
import { restrictTo } from "../middlewares/restrictTo.js";
const router = express.Router();

/**
 * @route POST /api/appointments/
 * @desc creates an appointment
 * @access Private
 */
router.post("/", restrictTo("patient") ,appointmentController.createAppointment);

/**
 * @route DELETE /api/appointments/:id
 * @desc Deletes an appointment by given id
 * @access Private
 */
router.delete("/:id", restrictTo("patient") ,appointmentController.deleteAppointment);

/**
 * @route PUT /api/appointments/:id
 * @desc Updates an appointment by given id
 * @access Private
 */
router.patch("/:id", restrictTo("patient") ,appointmentController.updateAppointment);

/**
 * @route GET /api/appointments/
 * @desc Gets all appointments of user (patient or Doctor)
 * @access Private
 */
router.get("/", appointmentController.getAllAppointments);

/**
 * @route PATCH /api/appointments/:id/status
 * @desc Updates appointment status (for doctors to mark as completed and upload report)
 * @access Private
 */
router.patch("/:id/report", restrictTo("Doctor") , appointmentController.updateAppointmentReport);

export default router;