import React, { useState } from "react";
import { Col, Collapse, FormCheck, FormControl, Row } from "react-bootstrap";

import "../AddLevel.css";

export interface StockistType {
  active: boolean;
  limits?: string;
  minPurchased?: string;
  maxPurchased?: string;
  limitedNumber?: string;
  addAgents?: boolean;
}
interface Props {
  stockistDone: (stockist: StockistType) => void;
}

export function Stockist(props: Props) {
  const [openStockist, setOpenStockist] = useState(false);
  const [limits, setLimits] = useState<string>();
  const [minPurchased, setMinPurchased] = useState<string>();
  const [maxPurchased, setMaxPurchased] = useState<string>();
  const [limitedNumber, setLimitedNumber] = useState<string>();
  const [addAgents, setAddAgents] = useState(false);

  let stockist: StockistType = {
    active: openStockist,
    addAgents: addAgents,
    limits,
    minPurchased,
    maxPurchased,
    limitedNumber
  };

  const onSwitchChange = () => {
    setOpenStockist(!openStockist);
    stockist.active = !openStockist;
    props.stockistDone(stockist);
  };

  const handleSetLimitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimits(e.target.value);
    stockist.limits = e.target.value;
    props.stockistDone(stockist);
  };

  const handleChangeMinPurchased = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPurchased(e.target.value);
    stockist.minPurchased = e.target.value;
    props.stockistDone(stockist);
  };

  const handleChangeMaxPurchased = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPurchased(e.target.value);
    stockist.maxPurchased = e.target.value;
    props.stockistDone(stockist);
  };

  const handleChangeLimitedNumber = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLimitedNumber(e.target.value);
    stockist.limitedNumber = e.target.value;
    props.stockistDone(stockist);
  };
  const handleAddAgents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddAgents(e.target.checked);
    stockist.addAgents = e.target.checked
    props.stockistDone(stockist)
  };

  return (
    <div className="collapseView">
      <div className="collapseViewHeader">
        <label>Stockist</label>
        <FormCheck
          onChange={onSwitchChange}
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
