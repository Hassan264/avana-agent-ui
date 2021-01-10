import React, { useState } from "react";
import { Col, Collapse, FormCheck, FormControl, Row } from "react-bootstrap";

import "../AddLevel.css";

export default function Affiliate() {
  const [openAffiliate, setAffiliateOpen] = useState(false);
  const [commissionCondition, setCommissionCondition] = useState("");
  const [percentageChange, setPercentageChange] = useState(false);
  const [limitedNumber, setLimitedNumber] = useState(false)
  const [howMany, setHowMany] = useState("")

  const handleCommissionConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommissionCondition(e.target.value);
  };

  const handlePercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentageChange(e.target.checked);
  };

  const handleLimitedNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimitedNumber(e.target.checked)
  }

  const handleHowManyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHowMany(e.target.value)
  }

  console.log({
    commissionCondition: commissionCondition,
    percentageChange: percentageChange,
    limitedNumber: limitedNumber,
    howMany: howMany
  });
  return (
    <div className="collapseView">
      <div className="collapseViewHeader">
        <label>Affiliate</label>
        <FormCheck
          onChange={() => setAffiliateOpen(!openAffiliate)}
          className="switchButton"
          type="switch"
          id="affiliate-custom-switch"
        />
        <br />
        <p className="collapseViewDescription">
          You can set the Affiliate settings in your level.
        </p>
      </div>
      <Collapse in={openAffiliate}>
        <div style={{ padding: "16px 20px", marginBottom: "16px" }}>
          <p>Commission Condition</p>
          <Row>
            <Col className="radioButtonContainer">
              <input
                className="radioButton"
                type="radio"
                value="per-month"
                name="commissionCondition"
                onChange={handleCommissionConditionChange}
              />
              <span>Per Month</span>
            </Col>
            <Col className="radioButtonContainer">
              <input
                className="radioButton"
                type="radio"
                value="per-order"
                name="commissionCondition"
                onChange={handleCommissionConditionChange}
              />
              <span>Per Order</span>
            </Col>
          </Row>
          <label className="checkboxContainer">
            Apply in percentage (%)
            <input type="checkbox" onChange={handlePercentageChange} />
            <span className="checkmark"></span>
          </label>
          <div style={{margin: "20px 0"}}>
            <span>Limited Number</span>
            <FormCheck
              className="switchButton"
              type="switch"
              id="limited-number-custom-switch"
              onChange={handleLimitedNumberChange}
            />
          </div>
          <p>How Many</p>
          <FormControl
            className="FormControl"
            placeholder="0"
            type="number"
            min="0"
            onChange={handleHowManyChange}
          />
        </div>
      </Collapse>
    </div>
  );
}
