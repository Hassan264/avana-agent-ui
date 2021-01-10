import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

interface Products {
  id: string;
  title: string;
  quantity: number;
  price: number;
  image: string;
  checked: boolean;
  selected: (selected: boolean, id: string) => void
}

export default function Product(props: Products) {
  const [selectProduct, setSelectProduct] = useState(false);

  const handleSelectProductChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.selected(e.target.checked, props.id)
    setSelectProduct(e.target.checked);
  };

  console.log({ id: props.id, selectProduct: selectProduct });

  return (
    <Container style={{marginTop: "20px"}}>
      <Row>
        <Col md={1}>
          <label className="checkboxContainer">
            <input type="checkbox" onChange={handleSelectProductChange} />
            <span className="checkmark"></span>
          </label>
        </Col>
        <Col md={2}>
          <Image src={props.image} rounded width="48px" height="48px"/>
        </Col>
        <Col md={4}>
          <Row>
            <Col>
              <label className="productTitle">{props.title}</label>
            </Col>
          </Row>
          <Row>
            <Col className="productQuantity">
              <span>Qty: {props.quantity}</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="productPrice">MYR{props.price}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
