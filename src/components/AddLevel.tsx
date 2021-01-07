import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./AddLevel.css";

import Stockist from "./Stockist";
import OverridingCommission from "./OverridingCommission";
import Dropshipper from "./Dropshipper";
import Affiliate from "./Affiliate";

export default function AddLevel() {
  const [show, setShow] = useState(false);
  const [levelName, setLevelName] = useState("");
  const [levelDescription, setLevelDescription] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleLevelNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLevelName(e.target.value);
  };

  const handleLevelDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLevelDescription(e.target.value);
  };

  console.log({levelName: levelName, levelDescription: levelDescription})
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg md={{ span: 4, offset: 4 }}>
          <Button
            className="newLevelBtn"
            style={{
              marginTop: "20px",
            }}
            variant="primary"
            onClick={handleShow}
          >
            Add New Level
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Level</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Level Name</label>
              <FormControl
                className="FormControl"
                placeholder="Add your name level"
                onChange={handleLevelNameChange}
              />
              <label>Description</label>
              <FormControl
                className="FormControl"
                as="textarea"
                placeholder="Add your level description"
                style={{
                  resize: "none",
                  height: "120px",
                }}
                onChange={handleLevelDescriptionChange}
              />
              <OverridingCommission />
              <Stockist />
              <Dropshipper />
              <Affiliate />
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="warning"
                className="submitButton"
                onClick={handleClose}
              >
                Create Level
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}
