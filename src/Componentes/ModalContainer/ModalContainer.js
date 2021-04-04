import React from 'react';
import estilos from './ModalContainer.module.css';

const ModalContainer = ({ titulo, setAtivo, children, classe }) => {
    const fundoRef = React.useRef();
  
    const fecharModal = ({ target }) => {
      if (target === fundoRef.current) setAtivo(false);
    }
  
    return (
      <div className={estilos.Modal} onClick={fecharModal} ref={fundoRef}>
        <div className={`${estilos.CardModal} ${(classe) ? classe : ''}`}>
          <button className={estilos.ModalFechar} onClick={() => setAtivo(false)}>
            <i className="fa fa-times"></i>
          </button>
  
          <h2>{titulo}</h2>

          {children}
        </div>
      </div>
    );
  };

export default ModalContainer;
