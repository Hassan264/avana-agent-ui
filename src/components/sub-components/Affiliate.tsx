import React, { useState } from "react";
import { Col, Collapse, FormCheck, FormControl, Row } from "react-bootstrap";

import "../AddLevel.css";

export interface AffiliateType {
  active: boolean,
  commissionCondition?: string,
  percentageChange?: boolean,
  limitedNumber?: boolean,
  howMany?: string
}

interface Props {
  affiliateDone: (affiliate: AffiliateType) => void
}

export function Affiliate(props: Props) {
  const [openAffiliate, setAffiliateOpen] = useState(false);
  const [commissionCondition, setCommissionCondition] = useState<string>();
  const [percentageChange, setPercentageChange] = useState(false);
  const [limitedNumber, setLimitedNumber] = useState(false)
  const [howMany, setHowMany] = useState<string>()

  const affiliate: AffiliateType = {
    active: openAffiliate,
    commissionCondition,
    percentageChange,
    limitedNumber,
    howMany
  }

  const onSwitchChange = () => {
    setAffiliateOpen(!openAffiliate)
    affiliate.active = openAffiliate
    props.affiliateDone(affiliate)
  }

  const handleCommissionConditionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommissionCondition(e.target.value);
    affiliate.commissionCondition = e.target.value
    props.affiliateDone(affiliate)
  };

  const handlePercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentageChange(e.target.checked);
    affiliate.percentageChange = e.target.checked
    props.affiliateDone(affiliate)
  };

  const handleLimitedNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimitedNumber(e.target.checked)
    affiliate.limitedNumber = e.target.checked
    props.affiliateDone(affiliate)
  }

  const handleHowManyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHowMany(e.target.value)
    affiliate.howMany = e.target.value
    props.affiliateDone(affiliate)
  }

  // console.log({
  //   commissionCondition: commissionCondition,
  //   percentageChange: percentageChange,
  //   limitedNumber: limitedNumber,
  //   howMany: howMany
  // });
  return (
    <div className="collapseView">
      <div className="collapseViewHeader">
        <label>Affiliate</label>
        <FormCheck
          onChange={onSwitchChange}
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
