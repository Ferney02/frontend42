
import axios from "axios";
import { useNavigate , useParams} from "react-router-dom";
import { useEffect, useState } from "react";

const URL = 'http://localhost:5000/api/clientes/';


const CompEditarCliente = () => {

    //se traen todos los campos para crear
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellido] = useState('')
    const [ndocumento, setNdocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

     //creacion de la funcion para guardar
     const editarCliente = async (e) => {
        e.preventDefault();
        await axios.patch(`${URL}${id}` , {
            nombres: nombres,
            apellidos: apellidos,
            ndocumento: ndocumento,
            correo: correo,
            telefono: telefono,
            direccion: direccion,

        })

        navigate('/clientes/');
    }

    useEffect( () => {
        getClientesID()

    }, []);

    const getClientesID = async () => {
        const resul = await axios.get(`${URL}${id}` )
        setNombres(resul.data.nombres)
        setApellido(resul.data.apellidos)
        setNdocumento(resul.data.ndocumento)
        setCorreo(resul.data.correo)
        setTelefono(resul.data.telefono)
        setDireccion(resul.data.direccion)
    }

    return(

    <div>
                    <h3>Actualizar Cliente</h3>
            <form onSubmit={editarCliente} >

                <div className="mb-3">
                    <label className="form-label">Nombre Cliente</label>
                    <input value={nombres} onChange={(e) => setNombres(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos Cliente</label>
                    <input value={apellidos} onChange={(e) => setApellido(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Numero del documento</label>
                    <input value={ndocumento} onChange={(e) => setNdocumento(e.target.value)} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo electronico</label>
                    <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Numero telefonico</label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Direccion residencial</label>
                    <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-info"><i className="fa-regular fa-floppy-disk"></i></button>

            </form>
    
    
    </div>
)

}


export default CompEditarCliente;