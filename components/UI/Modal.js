import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";

function Backdrop() {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(searchActions.setSearchVisible());
  }

  return <div className={classes.backdrop} onClick={closeModal} />;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  if (!props.open) return null;
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
