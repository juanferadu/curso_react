import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/button'

export default function ModalForm (props) {

  const {handleClose, handleSubmit}  = props;

  return (
    <Modal show={true} onHide={handleClose}>
    <ModalHeader closeButton>
      <ModalTitle>Compra Realizada</ModalTitle>
    </ModalHeader>
    <ModalBody>
      Su Orden Nro ha sido generada exitosamente!
    </ModalBody>
    <ModalFooter>
      <Button variant="danger" onClick={handleSubmit}>
        Cerrar 
      </Button>
    </ModalFooter>
  </Modal>
  );
}
