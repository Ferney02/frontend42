
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const URL = 'http://localhost:5000/api/clientes/';

const CompMosCliente = () => {

    const [clientes, setClientes] = useState([])


    //Se usa el effect para que actualice la funcion y asi se actualice cada que se haga un cambio
    useEffect(() => {
        getClientes()
    }, []);

    //function para mostrar cliente
    const getClientes = async () => {
        const resul = await axios.get(URL)
        setClientes(resul.data);
    }

    //Funcion eliminar cliente
    const eliminarClientes = async (id) => {
        await axios.delete(`${URL}${id}`)
        getClientes();
    }






    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to='/clientes/agregar/' className="btn btn-success mt-2 mb-2" ><i className="fa-solid fa-square-plus"></i></Link>
                    
                    <div class="table-responsive">
                    <table className="table table-dark table-hover">
                        <thead className="table-light">
                            <tr>
                                <th>Nombres</th>
                                <th>Apellido</th>
                                <th>Cedula</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Acciones</th>

                            </tr>
                        </thead>
                        <tbody>

                            {clientes.map((cliente, index) => (
                                <tr key={index}>
                                    <td>{cliente.nombres}</td>
                                    <td>{cliente.apellidos}</td>
                                    <td>{cliente.ndocumento}</td>
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>
                                        <Link to={`/clientes/editar/${cliente._id}`} className="btn btn-primary mt-2 mb-2" ><i className="fa-solid fa-square-pen"></i></Link>
                                        <button onClick={() => eliminarClientes(cliente._id)} className="btn btn-danger"><i className="fa-solid fa-user-xmark"></i></button>

                                    </td>
                                </tr>


                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CompMosCliente;