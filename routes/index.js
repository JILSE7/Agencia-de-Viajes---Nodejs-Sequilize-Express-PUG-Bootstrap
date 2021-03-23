//Definir el router
import express from 'express';

//Importando controllers
import { paginaInicio, 
        paginaNosotros, 
        paginaViajes, 
        paginaTestimoniales, 
        paginaDetalleViaje 
} from "../controllers/paginasControllers.js";

import  guardarTestimonial  from "../controllers/testimonialController.js";

const router = express.Router();


//Definiendo nuestras rutas
router.get('/',paginaInicio)

router.get('/nosotros',paginaNosotros)

router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial)

router.get('/viajes', paginaViajes)
router.get('/viajes/:viaje',paginaDetalleViaje)
export default router;

