import "./Modal.css";

function Modal({ question, cancel, confirmed }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{question}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={cancel}
          >
            Cancel
          </button>
          <button className="btn" onClick={confirmed}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}
export default Modal;
