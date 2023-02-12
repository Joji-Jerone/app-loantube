import React from "react";

import { Box, TextField, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { useState ,useContext } from "react";
import { mainContext } from "../mainContext";

function Residential() {
  const { data, setData } = useContext(mainContext);
  const [inp, setInp] = useState([]);
  const [inp2, setInp2] = useState([]);
  const [inp3, setInp3] = useState([]);
  const [inp4, setInp4] = useState([]);
  const [inp5, setInp5] = useState([]);

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2 }}>
        Residential Details
      </Typography>
      <Box
        sx={{
          backgroundColor: "secondary.light",
          padding: 4,
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            gap: 4,
            display: "grid",
            gridTemplateColumns: { md: "25% 70%", sm: "100%" },
          }}
        >
          <Box>
            <Typography variant="subtitle1">Post Code *</Typography>
            <FormControl fullWidth variant="standard">
              <Input 
              id="standard-adornment-amount" 
              type="number" 
              value={inp}
              onChange={(e) => {
                if (e.target.value.length <= 6) {
                  setInp(e.target.value);
                  setData({
                    ...data,
                    postcode: e.target.value,
                  });
                }
              }}
              required />
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "repeat(1,1fr)", md: "repeat(2,1fr)" },
              columnGap: 4,
            }}
          >
            <TextField
              type="number"
              id="standard-basic"
              label="House Number"
              variant="standard"
              value={inp2}
              onChange={(e) => {
                if (e.target.value.length <= 4) {
                  setInp2(e.target.value);
                  setData({
                    ...data,
                    houseno: e.target.value,
                  });
                }
              }}
              required
              sx={{
                mt: 1.5,
              }}
            />
            <TextField
              type="number"
              id="standard-basic"
              label="Flat Number (Optional)"
              variant="standard"
              value={inp3}
              onChange={(e) => {
                if (e.target.value.length <= 4) {
                  setInp3(e.target.value);
                  setData({
                    ...data,
                    flatno: e.target.value,
                  });
                }
              }}
              sx={{
                mt: 1.5,
              }}
            />
            <TextField
              id="standard-basic"
              label="House Name (Optional)"
              variant="standard"
              sx={{
                mt: 1.5,
              }}
            />
            <TextField
              id="standard-basic"
              label="Street"
              variant="standard"
              required
              sx={{
                mt: 1.5,
              }}
            />
            <TextField
              id="standard-basic"
              label="Country/District"
              variant="standard"
              required
              sx={{
                mt: 1.5,
              }}
            />
            <TextField
              id="standard-basic"
              label="City"
              variant="standard"
              required
              sx={{
                mt: 1.5,
              }}
            />
            <Typography mt={4} variant="subtitle1">
              Time At This Adress *
            </Typography>
            <Typography variant="subtitle1"></Typography>
            <TextField
              type="number"
              id="standard-basic"
              label="Years"
              variant="standard"
              value={inp4}
              onChange={(e) => {
                if (e.target.value.length <= 2 && e.target.value < 20) {
                  setInp4(e.target.value);
                  setData({
                    ...data,
                    houseno: e.target.value,
                  });
                }
              }}
              required
              sx={{
                mt: 1.5,
              }}
            />
            <TextField
              type="number"
              id="standard-basic"
              label="Months"
              variant="standard"
              value={inp5}
              onChange={(e) => {
                if (e.target.value.length <= 2 && e.target.value <= 11) {
                  setInp5(e.target.value);
                  setData({
                    ...data,
                    houseno: e.target.value,
                  });
                }
              }}
              required
              sx={{
                mt: 1.5,
              }}
            />
          </Box>
        </Box>
        <Box
          mt={4}
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "repeat(1,1fr)", md: "repeat(2,1fr)" },
          }}
        >
          <FormControl fullWidth variant="standard">
            <Typography variant="subtitle1">Residental Status *</Typography>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
              required
            >
              <MenuItem disabled value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="unfurnished tenant">Unfurnished Tenant</MenuItem>
              <MenuItem value="furnished tenant">Furnished Tenant</MenuItem>
              <MenuItem value="living with parents">
                Living With Parents
              </MenuItem>
              <MenuItem value="council tenant">Council Tenant</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}

export default Residential;
