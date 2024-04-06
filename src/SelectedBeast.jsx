//SelectedBeasts.jsx

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SelectedBeast = ({ selectedBeast, onHide }) => {
    return (
      <Modal show={selectedBeast !== null} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBeast?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedBeast?.image_url} alt={selectedBeast?.title} style={{maxWidth: "100%"}} />
          <p>{selectedBeast?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default SelectedBeast;