import React from "react";

import LogoText from "../assets/logo.svg";

import { Container } from "@mui/material";

function Header() {
  return (
    <Container maxWidth="2xl" sx={{ backgroundColor: "secondary.light" }}>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <img src={LogoText} style={{ width: "12rem" }} />
      </Container>
    </Container>
  );
}

export default Header;
