import Sequilize, { Sequelize } from 'sequelize'
import db from '../config/db.js'

const Testimoniales = db.define('testimoniales', {
    nombre: {type: Sequilize.STRING},
    email: {type: Sequilize.STRING},
    mensaje:{type: Sequilize.STRING}
})


export default Testimoniales