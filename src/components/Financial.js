import React from "react";

import { Box, TextField, Typography , InputAdornment } from "@mui/material";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { useState ,useContext } from "react";
import { mainContext } from "../mainContext";

function Financial() {

  const { data, setData } = useContext(mainContext);
  const [inp, setInp] = useState([]);
  const [inp2, setInp2] = useState([]);
  const [inp3, setInp3] = useState([]);
  const [inp4, setInp4] = useState([])

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2 }}>
        Financial Details
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
          <Box sx={{ mt: 1.7 }}>
            <TextField
              fullWidth
              type="number"
              id="standard-basic"
              label="Net Monthly Income"
              variant="standard"
              onKeyPress={(event) => {
                if (isNaN(Number(event.key))) {
                  event.preventDefault();
                }
              }}
              value={inp}
              required
              onChange={(e) => {
                if (e.target.value.length <= 9) {
                  setInp(e.target.value);
                  setData({
                    ...data,
                    monthlyincome: e.target.value,
                  });
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">€
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <FormControl variant="standard">
            <Typography variant="subtitle1">Pay Frequency *</Typography>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="frequency"
              required
            >
              <MenuItem disabled value="">
                <em>select..</em>
              </MenuItem>
              <MenuItem value="monthy">Monthly</MenuItem>
              <MenuItem value="four weekly">Four Weekly</MenuItem>
              <MenuItem value="fortnightly">Fortnightly</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <Typography variant="subtitle1">Next Pay Date *</Typography>
            <FormControl fullWidth variant="standard">
              <Input id="standard-adornment-amount" type="date" required />
            </FormControl>
          </Box>
          <Box sx={{ mt: 1.7 }}>
            <TextField
              fullWidth
              type="number"
              id="standard-basic"
              label="Monthly Rent / Mortgage Payement"
              variant="standard"
              onKeyPress={(event) => {
                if (isNaN(Number(event.key))) {
                  event.preventDefault();
                }
              }}
              value={inp2}
              onChange={(e) => {
                if (e.target.value.length <= 5) {
                  setInp2(e.target.value);
                  setData({
                    ...data,
                    rentmortage : e.target.value,
                  });
                }
              }}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">€
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <FormControl variant="standard">
            <Typography variant="subtitle1">Employement Status *</Typography>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
            >
              <MenuItem disabled value="">
                <em>select...</em>
              </MenuItem>
              <MenuItem value="emplyed full time">Employed Full Time</MenuItem>
              <MenuItem value="self employed">Self Employed</MenuItem>
              <MenuItem value="onbenefits">On-Benefits</MenuItem>
              <MenuItem value="unemployed">Unemployed</MenuItem>
              <MenuItem value="retired">Retired</MenuItem>
              <MenuItem value="homemaker">Home-Maker</MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="employed part time">Employed Part-Time</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <Typography variant="subtitle1">Occupation *</Typography>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
            >
              <MenuItem disabled value="">
                <em>select...</em>
              </MenuItem>
              <MenuItem value="managerial">Managerial</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="semi-professional">
                Semi-Professional/Technical
              </MenuItem>
              <MenuItem value="adminstrational">
                Clerical/Adminstrational
              </MenuItem>
              <MenuItem value="skilled trade">Skilled Trade</MenuItem>
              <MenuItem value="care/leisure/service">
                Care/Leisure/Service
              </MenuItem>
              <MenuItem value="sales/customer service">
                Sales/Customer Service
              </MenuItem>
              <MenuItem value="process/machine operative">
                Process/Machine Operative
              </MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <TextField
              fullWidth
              type="number"
              id="standard-basic"
              label="Bank Account Number"
              variant="standard"
              onKeyPress={(event) => {
                if (isNaN(Number(event.key))) {
                  event.preventDefault();
                }
              }}
              value={inp3}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  setInp3(e.target.value);
                  setData({
                    ...data,
                    bankaccno: e.target.value,
                  });
                }
              }}
              required
            />
            <label>Must contain 10 digits</label>
          </Box>
          <Box>
            <TextField
              type="number"
              fullWidth
              id="standard-basic"
              label="Sort Code"
              variant="standard"
              value={inp4}
              onChange={(e) => {
                if (e.target.value.length <= 5) {
                  setInp4(e.target.value);
                  setData({
                    ...data,
                    sortcode: e.target.value,
                  });
                }
              }}
              required
            />
             <label>Must contain 5 digits</label>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Financial;
