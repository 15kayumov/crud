import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const App = () => {
  const [show, setShow] = useState(false);
  const [arr, setarr] = useState([]);
  const handleClose = () => setShow(false);
  const [inp, setinp] = useState("");
  const [val4, setValu4] = useState("");
  function handleShow() {
    setShow(true);
    let obj = {
      inp: inp,
    };
    setarr([...arr, obj]);
  }

  function chose(event) {
    let x = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(x);
    reader.onload = function () {
      setValu4(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>crud</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={inp}
            onChange={(e) => setinp(e.target.value)}
            className="form-control"
            type="text"
          />
          <input
            type="file"
            className="form-control my-1 bg-secondary  color-white"
            onChange={(e) => chose(e)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className=" box  ">
        {arr.map((Item, index) => (
          <div key={index} className="box2">
            <h3>{Item.name}</h3>
            <img className="img" src={Item.photos} />
            <div className="fat d-flex ">
              <h3>prais:</h3>
              <h3>{Item.price}</h3>
              <h3>$</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
