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

import OverridingCommission from "./sub-components/OverridingCommission";
import Dropshipper from "./sub-components/Dropshipper";
import { Stockist, StockistType } from "./sub-components/Stockist";
import { Affiliate, AffiliateType } from "./sub-components/Affiliate";
import { AttributesType, SettingsType, LevelType, SubmitLevel } from "../state/actions/addLevelAction";
interface AddLevelProps {
  id: string;
}

export default function AddLevelModal(props: AddLevelProps) {
  const [show, setShow] = useState(false);
  const [levelName, setLevelName] = useState<string>();
  const [levelDescription, setLevelDescription] = useState<string>();
  const [overridingCommission, setOverridingCommission] = useState<{
    amount: string;
    active: boolean;
  }>();
  const [stockist, setStockist] = useState<StockistType>();
  const [dropshipper, setDropshipper] = useState<{
    howMany: string;
    active: boolean;
  }>();
  const [affiliate, setAffiliate] = useState<AffiliateType>();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleLevelNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLevelName(e.target.value);
  };

  const handleLevelDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLevelDescription(e.target.value);
  };

  const handleOverridingCommission = () => {
    return (active: boolean, amount?: string) => {
      console.log({ amount, active });
      if (amount !== "" && amount !== undefined && active) {
        setOverridingCommission({ amount, active });
      } else {
        setOverridingCommission(undefined);
      }
    };
  };

  const handleStockist = () => {
    return (data: StockistType) => {
      if (data.active) {
        console.log(data);
        setStockist(data);
      } else {
        setStockist(undefined);
      }
    };
  };

  const handleDropshipper = () => {
    return (active: boolean, howMany?: string) => {
      console.log({ howMany, active });
      if (howMany !== "" && howMany !== undefined && active) {
        setDropshipper({ howMany, active });
      } else {
        setDropshipper(undefined);
      }
    };
  };

  const handleAffiliate = () => {
    return (data: AffiliateType) => {
      if (data.active) {
        console.log(data);
        setAffiliate(data);
      } else {
        setAffiliate(undefined);
      }
    };
  };

  const handleSubmit = () => {
    let attributes: AttributesType
    if (levelName && levelDescription ) {
      attributes = {
        name: levelName,
        creatorId: props.id,
        description: levelDescription,
        status: "active",
        upperLevelId: "null",
        upperLevelCommission: 0,
      }
    } else {
      //ToDo call errorHandler
      return
    }
    

    const level: LevelType = {
      attributes: attributes
    };

    let settings: SettingsType = {}

    if(stockist && stockist.limits) {
      settings.stockist = {
        number: 0,
        addingAgents: stockist.addAgents,
        purchase: stockist.limits ? {
          type: stockist.limits,
          minimum: stockist.minPurchased ? Number(stockist.minPurchased) : undefined,
          maximum: stockist.maxPurchased ? Number(stockist.maxPurchased) : undefined
        } : undefined 
      }
    } else {
      //ToDo call errorHandler
      return
    }

    if (affiliate && affiliate.commissionCondition) {
      settings.affiliate = {
        number: 0,
        commission: {
          type: affiliate.commissionCondition,
          basedOn: "fixed_number",
        },
      }
    } else {
      //ToDo call errorHandler
      return
    }

    if (dropshipper) {
      settings.dropshipper = {
        number: Number(dropshipper.howMany)
      }
    } else {
      //ToDo call errorHandler
      return
    }

    level.settings = settings

      
    SubmitLevel(level);
    
    console.log("new level", {
      levelName,
      levelDescription,
      overridingCommission,
      stockist,
      dropshipper,
      affiliate,
    });
  };

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
              <OverridingCommission
                overridingCommissionDone={handleOverridingCommission()}
              />
              <Stockist stockistDone={handleStockist()} />
              <Dropshipper dropshipperDone={handleDropshipper()} />
              <Affiliate affiliateDone={handleAffiliate()} />
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="warning"
                className="submitButton"
                onClick={handleSubmit}
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
