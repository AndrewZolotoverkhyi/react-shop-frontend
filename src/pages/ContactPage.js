import React from "react";
import styled from "@emotion/styled";
import { Form, Card, Button } from "react-bootstrap";

const StyledCard = styled(Card)`
  width: 90vw;
  margin: auto;
`;

export default function ContactPage() {
  return (
    <StyledCard border="dark">
      <Card.Header>Є питання? Зв'яжіться з нами</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Ваш email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Виберіть тему</Form.Label>
            <Form.Control as="select">
              <option> --- </option>
              <option>Доставка й оплата</option>
              <option>Повернення</option>
              <option>Відгук</option>
              <option>Інше</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ваше повідомлення</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="success">Відправити</Button>
        </Form>
      </Card.Body>
    </StyledCard>
  );
}
