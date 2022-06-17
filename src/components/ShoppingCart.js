import React from "react";
import styled from "@emotion/styled";
import { Card, ListGroup, Button } from "react-bootstrap";

const Container = styled.div`
  position: sticky;
  display: flex;
  top: 65px;
  justify-content: flex-end;
  left: 0px;
  z-index: 100;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardHeader = styled(Card.Header)`
  font-size: 1.3rem;
  background: #464668;
  color: white;
`;

const ListGroupItem = styled(ListGroup.Item)`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;

export default function ShoppingCart({
  contentCart,
  onChangeCart,
  onChangeEmptyingWarning
}) {
  let totalAmount =
    contentCart.reduce((prev, next) => prev + next.price, 0) || 0;

  const deleteItem = index => {
    const newContentCart = contentCart.filter(
      (item, itemIndex) => index !== itemIndex
    );
    return onChangeCart([...newContentCart]);
  };

  return (
    <Container>
      <Card bg="light" style={{ width: "18rem" }}>
        <CardHeader>Ваша корзина</CardHeader>
        <Card.Body>
          <Card.Text>
            {contentCart.map((shoe, index) => (
              <ListGroup key={index} variant="flush">
                <ListGroupItem>
                  {shoe.name} Розмір: {shoe.selectedSize} Ціна: {shoe.price}€
                  <Button
                    onClick={e => deleteItem(index)}
                    variant="danger"
                    size="sm"
                  >
                    Видалити
                  </Button>
                </ListGroupItem>
              </ListGroup>
            ))}
            {totalAmount === 0 ? (
              "Зараз Ваша корзина пуста"
            ) : (
              <Total>
                {" "}
                Всього: {totalAmount}€
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onChangeEmptyingWarning(false)}
                >
                  Очистити
                </Button>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() =>
                    alert(
                      `Дякуюємо за Вашу покупку на ${
                        contentCart.length === 1
                          ? "1 pair"
                          : `${contentCart.length} пар`
                      } обуві на ${totalAmount}€! Скоро з Вами зв'яжеться наш консультант`
                    )
                  }
                >
                  Купити
                </Button>
              </Total>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
