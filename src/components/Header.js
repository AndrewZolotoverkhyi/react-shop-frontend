import React from "react";
import styled from "@emotion/styled";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Cart from "../icons/Cart";
import { latePulse } from "../Animations";
import { css } from "@emotion/core";

const H1 = styled.h1`
  font-size: 1.3rem;
  color: white;
  margin: 0 0 0 10px;
  align-self: center;
`;
const NavbarBrand = styled(Navbar.Brand)`
  display: flex;
`;

const NavbarStyled = styled(Navbar)`
  background-color: rgb(70, 70, 104);
`;

const Logo = styled.img`
  border-radius: 50%;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
`;

const CartWrapper = styled.div`
  animation: ${({ cartAnimation }) =>
    cartAnimation
      ? css`
          ${latePulse} 1s 1
        `
      : null};
`;

export default function Header({ toggleCart, cartAnimation }) {
  function setFilter(gender) {
    sessionStorage.setItem("genderFilter", gender);
  }

  return (
    <NavbarStyled fixed="top" bg="red" variant="dark" expand="md">
      <NavbarBrand href="/home">
        <Logo src="../logo192.png" width="40" height="40" alt="shop-logo" />
        <H1>Магазин взуття</H1>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/shop" onClick={() => setFilter("")}>
            Магазин
          </Nav.Link>
          <NavDropdown title="Категорії" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                setFilter("female");
                window.location.reload();
              }}
            >
              Для жінок
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                setFilter("male");
                window.location.reload();
              }}
            >
              Для чоловіків
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/aboutus">
            Про нас
          </Nav.Link>
          <Nav.Link href="/contact">Контакти</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Button onClick={() => toggleCart()}>
        <CartWrapper cartAnimation={cartAnimation}>
          <Cart />
        </CartWrapper>
      </Button>
    </NavbarStyled>
  );
}
