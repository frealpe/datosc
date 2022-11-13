
import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import { usemodalStore } from '../../hook/usemodalStore';

///////////////////////////////////////////////////////////////////
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
///////////////////////////////////////////////////////////////////
Modal.setAppElement('#root');
///////////////////////////////////////////////////////////////////
export const LaboratorioModal = () => {
    
    //const setimagencar = "";
    //const setimagencar=activeSala.labImageUrl;
    ///////////////////////////////////////////////////////////////////    
    const {isLabModalOpen,closeLabModal,activeSala}=usemodalStore();
    ///////////////////////////////////////////////////////////////////
    const [formSubmitted, setformSubmitted] = useState(false);
    ///////////////////////////////////////////////////////////////////
    const onCloseModal =()=>{
        closeLabModal();
    }
    ///////////////////////////////////////////////////////////////////
    const [formValues, setformValues] = useState({
        
    '_id':'132',
    'nombre':'Lab321',
    'laboratorista': ' Jorge',
    'descripcion':'Laboratorio de Electronica',        
    'img':'asfadf',
    'arch':'asda',
    }
    );

    ///////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////
    const nombreClass = useMemo(() =>{
        if(!formSubmitted) return'';
        
        return(formValues.nombre.length>0)
        ?'is-valid'
        :'is-invalid'
        
    }, [formValues.nombre,formSubmitted])
    ///////////////////////////////////////////////////////////////////
    useEffect(() => {         
    if(activeSala.length !== 0)
    {              
        setformValues({...activeSala});     
       } 
    
     }, [activeSala]);

    ///////////////////////////////////////////////////////////////////  

    ///////////////////////////////////////////////////////////////////
    const onInputChanged = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }
    ///////////////////////////////////////////////////////////////////
    const onSubmit=(event)=>{
        event.preventDefault();
        setformSubmitted(true);
        if(formValues.nombre<=0) return;
        //TODO 
        //CERRAR MODAL REMOVER ERRORES
    }
    ///////////////////////////////////////////////////////////////////

  return (
    <Modal
    isOpen={isLabModalOpen}
    onRequestClose={ onCloseModal }
    style={customStyles}
    className="modal"
    overlayClassName="modal-fondo"
    closeTimeoutMS={ 200 }    
    >
    <h1> Editar Sala </h1>
            <hr />
            <form className="container" onSubmit={onSubmit}>
                
               <hr />               
                <div className="form-group mb-2">
                    <label>Imagen Laboratorio</label>
                    <div id='imUrl'>                    
                        <img src={activeSala.labImageUrl} className="card-img" />
                    </div>
                    
                    <hr />   
                        <input type="file">
                        
                        </input>
                </div>

                <div className="form-group mb-2">
                    <label>Nombre de la Sala</label>
                    <input 
                        type="text" 
                        className={`form-control ${nombreClass}`}
                        placeholder="Nombre de la sala"
                        name="nombre"
                        autoComplete="off"
                        value={formValues.nombre}
                        onChange={onInputChanged}
                    />
                    <small id="nombreHelp" className="form-text text-muted">Número de la Sala</small>
                </div>

                <div className="form-group mb-2">
                    <label>Nombre del Laboratorista</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Nombre del Laboratorista encargado"
                        name="laboratorista"
                        autoComplete="off"
                        value={formValues.laboratorista}
                        onChange={onInputChanged}
                    />
                    <small id="laboratoristaHelp" className="form-text text-muted">Nombre del Encargado</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Descripción del espacio físico"
                        rows="5"
                        name="descripcion"
                        value={formValues.descripcion}
                        onChange={onInputChanged}
                    ></textarea>
                    <small id="descripcionHelp" className="form-text text-muted">Información relacionada con la sala</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
    </Modal>
  )
}
