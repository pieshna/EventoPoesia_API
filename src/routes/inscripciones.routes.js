const router = require("express").Router();
const {
  estudianteNuevo,
  inscripcionNueva,
  obtenerEstudiantesPorCarnet,
  obtenerInscripcionesPorCarnet,
} = require("../Inscripcion/inscripcion");

router.post("/estudiante", estudianteNuevo);
router.post("/inscripcion", inscripcionNueva);
router.get("/estudiante/:carnet", obtenerEstudiantesPorCarnet);
router.get("/inscripcion/:carnet", obtenerInscripcionesPorCarnet);

module.exports = router;