import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./AddLevel.css";
import { getCommissionTypes, submitCommission } from "../state/actions/commissionTypeAction";

interface CommissionTypeProps {
  id: string;
  levelName: string;
}

export default function CommissionTypeModal(props: CommissionTypeProps) {
  const [show, setShow] = useState(false);
  const [submitButton, setSubmitButton] = useState(true);
  const [selectedCommissionType, setSelectedCommissionType] = useState("")
  const [commissionTypeOptions, setCommissionTypeOptions] = useState<string[]>([])


  const handleClose = () => {
    setShow(false);
    setSubmitButton(true);
  };

  const handleShow = () => setShow(true);

  const getCommissionTypesOption = async () => {
    const response = await getCommissionTypes();
    // console.log('response', response)
    if (response.data.commissionType) {
      setCommissionTypeOptions(response.data.commissionType)
    }
  };

  useEffect(() => {
    getCommissionTypesOption()
  }, [])

  const commissionTypesOption = commissionTypeOptions.map((option) => {
    return <option value={option.replace(/ /g, "-")} key={option.replace(/ /g, "-")}>{option[0].toUpperCase() + option.slice(1)}</option>;
  });

  const handleCommissionTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value !== "default") {
      setSubmitButton(false);
      setSelectedCommissionType(e.target.value)
    } 
  };

  const handleSubmit = () => {
    submitCommission(selectedCommissionType)
    handleClose()
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg md={{ span: 4, offset: 4 }}>
          <span className="setCommissionTypeAnchor" onClick={handleShow}>
            Set Commission Type
          </span>

          <Modal
            show={show}
            onHide={handleClose}
            className="setCommissionTypeModal"
          >
            <Modal.Header closeButton>
              <Modal.Title>Set Commission Type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup className="mb-3">
                <FormControl
                  className="FormControl"
                  disabled
                  placeholder="Level Name"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <InputGroup.Text
                    id="basic-addon2"
                    className="FormControl levelNameInputGroup"
                  >
                    {props.levelName}
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <div>
                <FormControl
                  as="select"
                  className="FormControl commissionTypeSelect"
                  onChange={handleCommissionTypeChange}
                  defaultValue="default"
                >
                  <option disabled value="default">
                    Select your commission type
                  </option>
                  {commissionTypesOption}
                </FormControl>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                disabled={submitButton}
                variant="warning"
                className="submitButton"
                onClick={handleSubmit}
              >
                Set Commission
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}
