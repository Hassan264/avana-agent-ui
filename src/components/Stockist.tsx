import React, { useState } from "react";
import { Col, Collapse, FormCheck, FormControl, Row } from "react-bootstrap";

import "./AddLevel.css";
export default function Stockist() {
  const [openStockist, setOpenStockist] = useState(false);
  const [limits, setLimits] = useState("");
  const [minPurchased, setMinPurchased] = useState("");
  const [maxPurchased, setMaxPurchased] = useState("");
  const [limitedNumber, setLimitedNumber] = useState("");
  const [addAgents, setAddAgents] = useState(false);

  const handleSetLimitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimits(e.target.value);
  };

  const handleChangeMinPurchased = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPurchased(e.target.value);
  };

  const handleChangeMaxPurchased = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPurchased(e.target.value);
  };

  const handleChangeLimitedNumber = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLimitedNumber(e.target.value);
  };
  const handleAddAgents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddAgents(e.target.checked);
  };

  console.log({
    limits: limits,
    minPurchased: minPurchased,
    maxPurchased: maxPurchased,
    limitedNumber: limitedNumber,
    addAgents: addAgents,
  });

  return (
    <div className="collapseView">
      <div className="collapseViewHeader">
        <label>Stockist</label>
        <FormCheck
          onChange={() => setOpenStockist(!openStockist)}
          className="switchButton"
          type="switch"
          id="stockist-custom-switch"
        />
        <br />
        <p className="collapseViewDescription">
          You can set the Stockist settings in your level.
        </p>
      </div>
      <Collapse in={openStockist}>
        <div style={{ padding: "16px 20px", marginBottom: "16px" }}>
          <p>Set limits</p>
          <Row>
            <Col className="radioButtonContainer">
              <input
                className="radioButton"
                type="radio"
                value="per-month"
                name="setLimits"
                onChange={handleSetLimitsChange}
              />
              <span>Per Month</span>
            </Col>
            <Col className="radioButtonContainer">
              <input
                className="radioButton"
                type="radio"
                value="per-order"
                name="setLimits"
                onChange={handleSetLimitsChange}
              />
              <span>Per Order</span>
            </Col>
          </Row>
          <div style={{ marginTop: "16px" }}>
            <p>Min Purchase Item</p>
            <FormControl
              className="FormControl"
              placeholder="MYR 0"
              type="number"
              min="0"
              onChange={handleChangeMinPurchased}
            />
          </div>
          <div style={{ marginTop: "16px" }}>
            <p>Max Purchase Item</p>
            <FormControl
              className="FormControl"
              placeholder="MYR 0"
              type="number"
              min="0"
              onChange={handleChangeMaxPurchased}
            />
          </div>
          <div style={{ marginTop: "16px" }}>
            <p>Limited Number</p>
            <FormControl
              className="FormControl"
              placeholder="0"
              type="number"
              min="0"
              onChange={handleChangeLimitedNumber}
            />
          </div>
          <div style={{ marginTop: "16px" }}>
            <p>Can Add Agents</p>
            <FormCheck
              className="switchButton"
              type="switch"
              id="add-agents-custom-switch"
              onChange={handleAddAgents}
            />
            <p className="collapseViewDescription">
              You can set the Stockist settings in your level.
            </p>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
