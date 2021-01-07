import React, { useState } from "react";
import { Collapse, FormCheck, FormControl } from "react-bootstrap";

export default function Dropshipper() {
  const [openDropshipper, setDropshipperOpen] = useState(false);
  const [howMany, setHowMany] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHowMany(e.target.value);
  };

  console.log({ howMany: howMany });
  return (
    <div className="collapseView">
      <div className="collapseViewHeader">
        <label>Dropshipper</label>
        <FormCheck
          onChange={() => setDropshipperOpen(!openDropshipper)}
          className="switchButton"
          type="switch"
          id="dropshipper-custom-switch"
        />
        <br />
        <p className="collapseViewDescription">
          You can set the Dropshipper settings in your level.
        </p>
      </div>
      <Collapse in={openDropshipper}>
        <div style={{ padding: "16px 20px", marginBottom: "16px" }}>
          <p>How Many</p>
          <FormControl
            className="FormControl"
            placeholder="0"
            type="number"
            min="0"
            onChange={handleChange}
          />
        </div>
      </Collapse>
    </div>
  );
}
