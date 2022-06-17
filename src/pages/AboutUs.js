import React from "react";
import styled from "@emotion/styled";
import {Card} from "react-bootstrap";

const StyledCard = styled(Card)`
  width: 90vw;
  margin-top: 100px;
  margin-left: 4.7%;
  margit-right: auto; 
`;

const StyledHeader = styled(Card.Header)`
  font-size : 24px;
`;

export default function AboutUs() {
  return (
    <StyledCard border="dark">
      <center><StyledHeader>Про нас</StyledHeader></center>
      <Card.Body>
      <p>Магазин взуття – це топовий український рітейл одягу, взуття, аксесуарів та косметики. Ми працюємо 27 років і відкрили 140+ магазинів по всій Україні. Чому ми шукаємо не співробітників, а саме наших людей? Бо ми зростаємо тільки тоді, коли ростуть наші люди, наші персоналії, а не ноунейм-працівники, які відбувають зміну. Наша команда – це люди зі спільними цінностями й цілями.</p>
      </Card.Body>
    </StyledCard>
  );
}
