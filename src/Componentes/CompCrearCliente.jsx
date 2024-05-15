
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = 'http://localhost:5000/api/clientes/';




const CompCrearCliente = () => {

    //se traen todos los campos para crear
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellido] = useState('')
    const [ndocumento, setNdocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelofono] = useState('')
    const [direccion, setDireccion] = useState('')
    const navigate = useNavigate();


    //creacion de la funcion para guardar
    const guardarClientes = async (e) => {
        e.preventDefault();

        await axios.post(URL, {
            nombres: nombres,
            apellidos: apellidos,
            ndocumento: ndocumento,
            correo: correo,
            telefono: telefono,
            direccion: direccion,
        })
        navigate('/clientes/')
    }

    return (

        <div>
            <h3>Guardar Cliente</h3>
            <form onSubmit={guardarClientes} >

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
                    <input value={telefono} onChange={(e) => setTelofono(e.target.value)} type="number" className="form-control" />
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



export default CompCrearCliente;