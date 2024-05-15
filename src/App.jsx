
import './App.css'
//Importamos los componentes
import CompMosCliente from './Componentes/CompMosCliente';
import CompCrearCliente from './Componentes/CompCrearCliente';
import CompEditarCliente from './Componentes/CompEdiCliente';
//Importacion del Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompFooter from './Componentes/Footer';


function App() {


  return (
    <div className='App'>
      <header className='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar</a>
            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" ta-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a aria-current="page" className="nav-link active" href='/'>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/clientes">Clientes</a>
                </li>
                <li className="nav-item dropdown">
                  <a aria-expanded="false" className="nav-link" data-bs-toggle="dropdown" href="#" role="button">Productos</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#"> Action </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    aria-disabled="true"
                    className="nav-link disabled"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              <form
                className="d-flex"
                role="search"
              >
                <input
                  aria-label="Search"
                  className="form-control me-2"
                  placeholder="Search"
                  type="search"
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>


      </header>
      <BrowserRouter>
        <Routes >
          <Route path='/clientes/' element={<CompMosCliente />} />
          <Route path='/clientes/agregar/' element={<CompCrearCliente />} />
          <Route path='/clientes/editar/:id' element={<CompEditarCliente />} />
        </Routes>
      </BrowserRouter>
      <CompFooter/>
    </div>
  )
}



export default App
