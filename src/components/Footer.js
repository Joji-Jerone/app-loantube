import React from "react";

import { Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Container
      maxWidth="2xl"
      sx={{
        backgroundColor: "secondary.footer",
        position: "absolute",
        bottom: -270
      }}
    >
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Typography sx={{ textAlign: "center" }}>
          LoanTube ® 2023 All Rights Reserved.
        </Typography>
      </Container>
    </Container>
  );
}

export default Footer;
