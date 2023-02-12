import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { mainContext } from "../mainContext";

import { Box, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import Holiday from "../assets/holiday.svg";
import Car from "../assets/car.svg";
import Debt from "../assets/debt.svg";
import Home from "../assets/home.svg";
import Wedding from "../assets/wedding.svg";
import Others from "../assets/others.svg";

function Loan() {
  const { data, setData } = useContext(mainContext);
  const [inp, setInp] = useState([]);
  let cards;

  useEffect(() => {
    cards = document.querySelectorAll("#cards");
  });

  function selectHandler(i) {
    const arr = ["holiday", "car", "debt", "home", "wedding", "others"];
    setData((prev) => {
      return {
        ...prev,
        loanPurpose: arr[i],
      };
    });
    cards.forEach((e, idx) => {
      if (i == idx) {
        e.classList.add("bgc");
      } else {
        e.classList.remove("bgc");
      }
    });
  }

  function filterNumeric(value) {
    return value.replace(/[^0-9]/g, '');
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2 }}>
        Loan Details
      </Typography>
      <Box
        sx={{
          backgroundColor: "secondary.light",
          padding: 4,
          gap: 4,
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: { sm: "repeat(1,1fr)", md: "repeat(2,1fr)" },
          }}
        >
          <Box>
            <Typography variant="subtitle1">Loan Amount</Typography>
            <FormControl fullWidth variant="standard">
              <Input
                id="standard-adornment-amount"
                type="number"
                value={inp}
                inputMode="numeric"
                required
                onKeyPress={(event) => {
                  if (isNaN(Number(event.key))) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  if (e.target.value.length <= 6 && e.target.value <= 250000) {
                    setInp(e.target.value);
                    setData({
                      ...data,
                      loanAmount: e.target.value,
                    });
                  }
                }}
                startAdornment={
                  <InputAdornment position="start">€</InputAdornment>
                }
              />
              <label>Enter amount between £1000 to £250000</label>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="subtitle1">Loan Term</Typography>
            <FormControl fullWidth variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
                required
                onChange={(e) => {
                  setData({
                    ...data,
                    loanTerm: e.target.value,
                  });
                }}
              >
                <MenuItem value={2}>2 Years</MenuItem>
                <MenuItem value={3}>3 Years</MenuItem>
                <MenuItem value={4}>4 Years</MenuItem>
                <MenuItem value={5}>5 Years</MenuItem>
                <MenuItem value={6}>6 Years</MenuItem>
                <MenuItem value={7}>7 Years</MenuItem>
                <MenuItem value={8}>8 Years</MenuItem>
                <MenuItem value={10}>10 Years</MenuItem>
                <MenuItem value={12}>12 Years</MenuItem>
                <MenuItem value={15}>15 Years</MenuItem>
                <MenuItem value={20}>20 Years</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box>
          <Typography variant="subtitle1" mt={3}>
            Select Your Loan Purpose
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: 6,
              m: 4,
            }}
          >
            {[Holiday, Car, Debt, Home, Wedding, Others].map((e, i) => {
              return (
                <>
                  <Box
                    id="cards"
                    key={i}
                    onClick={() => selectHandler(i)}
                    sx={{
                      boxShadow: 4,
                      display: "grid",
                      placeItems: "center",
                      p: 2,
                      borderRadius: 3,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        color: "primary.main",
                      },
                    }}
                  >
                    <img src={e} style={{ width: "3rem" }} alt="" />
                  </Box>
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Loan;
