
interface ModalProps {
     modalOpen: boolean
     setModalOpen: (open : boolean) => boolean | void;
     children: React.ReactNode
 }

import React, { Children } from "react";

const Modal = ({ modalOpen, setModalOpen, children }) =>  {
    return (
    <div className={ `modal ${modalOpen ?"modal-open" : ""}`}>
    <div className="modal-box">
      {children}
      <div className="modal-action">
        <label 
        onClick={() => setModalOpen(false)} 
        className="btn">Close!</label>
      </div>
    </div>
</div>)
};

export default Modal