import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function ToDo(props) {
  const [openModal, setOpenModal] = useState(false);

  const deleteHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* Below is a fancy IF returning the SECOND element if BOTH are TRUE, where a function (Modal) will always be TRUE */}
      {openModal && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}

      {/* The same can be written in ternary form returning a NULL value if FALSE */}
      {/* {openModal ? <Modal /> : null} */}
      {openModal && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default ToDo;
