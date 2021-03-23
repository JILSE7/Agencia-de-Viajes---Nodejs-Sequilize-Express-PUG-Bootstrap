import {Viaje} from '../models/Viaje.js'
import Testimoniales from '../models/Testimoniales.js'
const paginaInicio = async (req,res)=>{

    const promiseDB = [Viaje.findAll({limit:3}), Testimoniales.findAll({limit: 4}) ];

    try {
       //consultar 3 viajes del modelo viaje y 4 al modelo de Testimoniales
       //con un promise all para poder mejorar en performance
        const resultado = await Promise.all(promiseDB);
       res.render('inicio',{
           pagina: 'Inicio',
           clase: 'home',
           viajes: resultado[0],
           testimoniales: resultado[1]
       })       
    } catch (error) {
        console.log(error);
    }
 
}


const paginaNosotros = (req,res) =>{
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async(req,res)=>{
    //consultar BASE DE DATOS
    const viajes = await Viaje.findAll()
    res.render('viajes',{
        pagina: 'Viajes',
        viajes: viajes,
    })
}


const paginaTestimoniales = async(req,res)=>{

    try {
        const testimoniales = await Testimoniales.findAll();
        console.log(testimoniales);
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })     
    } catch (error) {
        console.log('error');
    }
   
}


//Muestra un viaje por su slug
const paginaDetalleViaje = async (req,res) =>{
    const {viaje: slug} = req.params;

    try {
       const resultado = await Viaje.findOne({where:{slug}})
       console.log(resultado);
       res.render('viaje', {
           pagina: 'Informacion pagina',
           resultado
       })
    
    } catch (error) {
        console.log(error);
    }
       
}
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}