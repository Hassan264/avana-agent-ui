import React, { useState } from "react";
import { Collapse, FormCheck, FormControl } from "react-bootstrap";

import "../AddLevel.css";

export default function OverridingCommission() {
  const [openOverridingCommission, setOverridingCommissionOpen] = useState(
    false
  );
  const [amount, setAmount] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  console.log(amount);

  return (
    <div className="collapseView">
      <div className="collapseViewHeader">
        <label>Overriding Commission</label>
        <FormCheck
          onChange={() =>
            setOverridingCommissionOpen(!openOverridingCommission)
          }
          className="switchButton"
          type="switch"
          id="overriding-commission-custom-switch"
        />
        <br />
        <p className="collapseViewDescription">
          Give commission to your parent level.
        </p>
      </div>
      <Collapse in={openOverridingCommission}>
        <div style={{ padding: "16px 20px", marginBottom: "16px" }}>
          <p>Amount</p>
          <FormControl
            className="FormControl"
            placeholder="MYR 0"
            type="number"
            min="0"
            value={amount}
            onChange={handleChange}
          />
        </div>
      </Collapse>
    </div>
  );
}
