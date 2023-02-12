import React from "react";

import { Box, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function Finish() {
  return (
    <Box sx={{ mt: 8 }}>
      <Box
        sx={{
          backgroundColor: "secondary.light",
          padding: 4,
          gap: 4,
          borderRadius: 3,
          display: "grid",
          rowGap: 1,
        }}
      >
        <Box sx={{ display: "grid", rowGap: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Before we find a loan for you, let’s create a password
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: ".9rem" }}>
            This means we can save your loan search history for you so you can
            access it anytime.
          </Typography>
        </Box>
        <Box sx={{ display: "grid", rowGap: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Create a memorable password
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: ".9rem" }}>
            Should be minimum 8 characters
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: ".9rem" }}>
            Should contain at least 1 number
          </Typography>
        </Box>
        <Box sx={{ display: { sm: "flex" }, gap: 4, alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ fontSize: "1rem" }}>
            Password *
          </Typography>
          <TextField
            type="password"
            required
            id="outlined-multiline-flexible"
            maxRows={4}
          />
        </Box>
      </Box>
      <Box sx={{ my: 8, display: "grid", rowGap: 2 }}>
        <Box>
          <Typography sx={{ fontStyle: "italic" }}>
            *
            <Checkbox
              required
              sx={{
                color: "primary.main",
              }}
            />
            Tick this box to confirm you agree to, and accept, our Terms and
            Conditions, Privacy Policy and Cookies Policy, and that we and our
            partners may contact you about your loan enquiry and your experience
            by Text, email, phone and postal mail.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontStyle: "italic" }}>
            *
            <Checkbox
              required
              sx={{
                color: "primary.main",
              }}
            />
            Tick this box to confirm you understand that the information you
            have provided will be shared with our panel of lenders & partners
            who will use it to check your eligibility for a loan. This will
            involve a soft credit search being carried out upon you, which will
            not affect your credit rating and it will not be visible to any
            third party.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontStyle: "italic" }}>
            I consent to receive information from LoanTube about relevant
            updates, latest products and services via selected communication
            methods:
          </Typography>
          <FormGroup
            sx={{
              fontStyle: "italic",
              display: "flex",
              flexDirection: "row",
              gap: 4,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  required
                  sx={{
                    color: "primary.main",
                  }}
                />
              }
              label="Email"
            />
            <FormControlLabel
              control={
                <Checkbox
                  required
                  sx={{
                    color: "primary.main",
                  }}
                />
              }
              label="SMS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  required
                  sx={{
                    color: "primary.main",
                  }}
                />
              }
              label="Call"
            />
          </FormGroup>
        </Box>
      </Box>
    </Box>
  );
}

export default Finish;
