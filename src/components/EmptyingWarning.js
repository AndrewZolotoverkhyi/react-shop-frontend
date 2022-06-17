import React from "react";
import styled from "@emotion/styled";
import { Alert, Button } from "react-bootstrap";

const AlertContainer = styled.div`
  z-index: 100;
  position: relative;
  top: 50vh;
  left: 15vw;
  width: 70vw;
`;
const MarginedButtons = styled(Button)`
  margin: auto;
`;

export default function EmptyingWarning({
  onChangeEmptyingWarning,
  onChangeCart,
  toggleCart
}) {
  return (
    <AlertContainer>
      <Alert variant="danger">
        <Alert.Heading>
          Чи справді бажаєте очисти корзину?
        </Alert.Heading>
        <hr />
        <div className="d-flex">
          <MarginedButtons
            onClick={() => onChangeEmptyingWarning(false)}
            variant="outline-success"
          >
            Ні
          </MarginedButtons>
          <MarginedButtons
            onClick={() => {
              onChangeEmptyingWarning();
              onChangeCart([]);
              setTimeout(() => toggleCart(), 700);
            }}
            variant="outline-danger"
          >
            Так
          </MarginedButtons>
        </div>
      </Alert>
    </AlertContainer>
  );
}
