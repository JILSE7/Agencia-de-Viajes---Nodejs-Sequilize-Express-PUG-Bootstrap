import  Testimoniales from '../models/Testimoniales.js'


const guardarTestimonial = async(req,res) =>{
    const {nombre, email, mensaje} = req.body
    const errores = [];
    if(!nombre  || !email || mensaje === ' '){
        errores.push({error: 'campos obligatorios'});

    }else if(!isNaN(nombre)|| !isNaN(email)){
        errores.push({error:'No se aceptan numeros en el campo de nombre o email'});

    }
    console.log(errores);
    console.log(req.body);

    if(errores.length > 0){
        //CONSULTAR TESTIMONIALES EXISTENTES
        const testimoniales = await Testimoniales.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
            
        })
        return
    }

    //guardar en la base de datos
    try {
        await Testimoniales.create({
            nombre,
            email,
            mensaje
        })
        res.redirect('/testimoniales')
    } catch (error) {
        console.log(error);
    }


};


export default guardarTestimonial;