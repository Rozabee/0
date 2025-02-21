import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

function EditCat() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick = {handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Edit
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id= 'editdetailsForm' className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" placeholder='name'/>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
              Age
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="age" type="text" placeholder='age'/>
          </div>
        </div>
      </form>
        </Modal.Body>
        <Modal.Footer>
          
          <button className= " hover:bg-purple-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 rounded" onClick={handleClose} >Close</button>
          <button className= "bg-pink-500 hover:bg-purple-500 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-purple-900 rounded"id='editdetailsForm'>Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditCat;