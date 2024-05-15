import React from "react";
import redes from "../gato.jpg";

const CompFooter = () => {
    return (
        <div> 
            <div className="card-body"> 
            <h4 className="card-title">Direccion calle 121 #63 - 35</h4>
            <p className="card-tet"> Correo gatos@gmail.com - telefono (601) - 5362373 - 3182342819 </p>
        <img src={redes} className="App-logol" alt="logo" />
            </div>
            <div className=" carf-footer text-muted" > Horario lunes - viernes 8am - 7pm</div>
        </div>
    )
}

export default CompFooter