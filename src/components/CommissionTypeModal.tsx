import React, { useState } from "react";
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
import Product from "./sub-components/Product";

interface CommissionTypeProps {
  levelName: string;
}

interface Products {
  id: string;
  title: string;
  quantity: number;
  price: number;
  image: string;
  checked: boolean;
}

export default function CommissionTypeModal(props: CommissionTypeProps) {
  const [show, setShow] = useState(false);
  const [Products, setProducts] = useState(false);
  const [submitButton, setSubmitButton] = useState(true);

  let productsToSubmit: Products[] = [];

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const commissionTypesOptionRaw = [
    { key: "All Products", value: "allProducts" },
    { key: "Selected Product", value: "selectedProduct" },
    { key: "Selected Category", value: "selectedCategory" },
    { key: "Selected Collection", value: "selectedCollection" },
  ];
  const commissionTypesOption = commissionTypesOptionRaw.map((option) => {
    return <option value={option.value}>{option.key}</option>;
  });

  const handleCommissionTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value === "") {
      setProducts(false);
      setSubmitButton(true);
    } else {
      setProducts(true);
    }
    console.log(e.target.value);
  };

  const products: Products[] = [
    {
      id: "1",
      title: "Camera",
      quantity: 190,
      price: 3500,
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      checked: false,
    },
    {
      id: "2",
      title: "Lighter",
      quantity: 82,
      price: 999,
      image:
        "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      checked: false,
    },
  ];

  const showProducts = () => {
    return products.map((product) => {
      return (
        <Product
          id={product.id}
          title={product.title}
          quantity={product.quantity}
          price={product.price}
          image={product.image}
          checked={product.checked}
          selected={selectProduct()}
        />
      );
    });
  };

  function selectProduct() {
    return (checked: boolean, id: string) => {
      let product = products.find((product) => product.id === id);
      if (product) {
        if (checked) {
          product.checked = checked;
          productsToSubmit.push(product);
          setSubmitButton(!checked);
        }else {
          productsToSubmit = productsToSubmit.filter((obj) => obj !== product);
          if (productsToSubmit.length === 0) {
            setSubmitButton(!checked);
          }
        }
      }
      console.log({ checked, id, product, allProducts: productsToSubmit });
    };
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
                >
                  <option disabled selected value="">
                    Select your commission type
                  </option>
                  {commissionTypesOption}
                </FormControl>
              </div>
              <div>{Products ? showProducts() : ""}</div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                disabled={submitButton}
                variant="warning"
                className="submitButton"
                onClick={handleClose}
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
