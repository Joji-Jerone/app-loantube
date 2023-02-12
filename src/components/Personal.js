import React from "react";
import { useState , useContext } from "react";
import { mainContext } from "../mainContext";
import { Box, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Personal() {
  const { data, setData } = useContext(mainContext);
  const [inp, setInp] = useState([]);
  const [inp2, setInp2] = useState([]);

  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2 }}>
        Personal Details
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
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            required
            onChange={(e) => {
              setData({
                ...data,
                firstName: e.target.value,
              });
            }}
          />
          <TextField
            id="standard-basic"
            label="Middle Name(Optional)"
            variant="standard"
            onChange={(e) => {
              setData({
                ...data,
                middleName: e.target.value,
              });
            }}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            required
            onChange={(e) => {
              setData({
                ...data,
                lastName: e.target.value,
              });
            }}
          />
        </Box>
        <Box
          mt={4}
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "repeat(1,1fr)", md: "repeat(2,1fr)" },
            gap: 4,
          }}
        >
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio required />}
                label="Female"
                onSelect={(e) => {
                  setData({
                    ...data,
                    lastName: e.target.value,
                  });
                }}
              />
              <FormControlLabel
                value="male"
                control={<Radio required />}
                label="Male"
                onSelect={(e) => {
                  setData({
                    ...data,
                    lastName: e.target.value,
                  });
                }}
              />
              <FormControlLabel
                value="other"
                control={<Radio required />}
                label="Other"
                onSelect={(e) => {
                  setData({
                    ...data,
                    lastName: e.target.value,
                  });
                }}
              />
            </RadioGroup>
          </FormControl>
          <Box>
            <Typography variant="subtitle1">Date of Birth *</Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
              }}
            >
              <FormControl fullWidth variant="standard">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Age"
                  onChange={(e) => {
                    setData({
                      ...data,
                      age: e.target.value,
                    });
                  }}
                  required
                >
                  <MenuItem disabled value="">
                    <em>Day</em>
                  </MenuItem>
                  <MenuItem value={1}>01</MenuItem>
                  <MenuItem value={2}>02</MenuItem>
                  <MenuItem value={3}>03</MenuItem>
                  <MenuItem value={4}>04</MenuItem>
                  <MenuItem value={5}>05</MenuItem>
                  <MenuItem value={6}>06</MenuItem>
                  <MenuItem value={7}>07</MenuItem>
                  <MenuItem value={8}>08</MenuItem>
                  <MenuItem value={9}>09</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={26}>26</MenuItem>
                  <MenuItem value={27}>27</MenuItem>
                  <MenuItem value={28}>28</MenuItem>
                  <MenuItem value={29}>29</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={31}>31</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="standard">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Age"
                  required
                >
                  <MenuItem disabled value="">
                    <em>Month</em>
                  </MenuItem>
                  <MenuItem value={1}>January</MenuItem>
                  <MenuItem value={2}>February</MenuItem>
                  <MenuItem value={3}>March</MenuItem>
                  <MenuItem value={4}>April</MenuItem>
                  <MenuItem value={5}>May</MenuItem>
                  <MenuItem value={6}>June</MenuItem>
                  <MenuItem value={7}>July</MenuItem>
                  <MenuItem value={8}>August</MenuItem>
                  <MenuItem value={9}>September</MenuItem>
                  <MenuItem value={10}>October</MenuItem>
                  <MenuItem value={11}>November</MenuItem>
                  <MenuItem value={12}>December</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="standard">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Age"
                  required
                >
                  <MenuItem disabled value="">
                    <em>Year</em>
                  </MenuItem>
                  <MenuItem value={1963}>1963</MenuItem>
                  <MenuItem value={1964}>1964</MenuItem>
                  <MenuItem value={1965}>1965</MenuItem>
                  <MenuItem value={1966}>1966</MenuItem>
                  <MenuItem value={1967}>1967</MenuItem>
                  <MenuItem value={1968}>1968</MenuItem>
                  <MenuItem value={1969}>1969</MenuItem>
                  <MenuItem value={1970}>1970</MenuItem>
                  <MenuItem value={1971}>1971</MenuItem>
                  <MenuItem value={1972}>1972</MenuItem>
                  <MenuItem value={1973}>1973</MenuItem>
                  <MenuItem value={1974}>1974</MenuItem>
                  <MenuItem value={1975}>1975</MenuItem>
                  <MenuItem value={1976}>1976</MenuItem>
                  <MenuItem value={1977}>1977</MenuItem>
                  <MenuItem value={1978}>1978</MenuItem>
                  <MenuItem value={1979}>1979</MenuItem>
                  <MenuItem value={1980}>1980</MenuItem>
                  <MenuItem value={1981}>1981</MenuItem>
                  <MenuItem value={1982}>1982</MenuItem>
                  <MenuItem value={1983}>1983</MenuItem>
                  <MenuItem value={1984}>1984</MenuItem>
                  <MenuItem value={1985}>1985</MenuItem>
                  <MenuItem value={1986}>1986</MenuItem>
                  <MenuItem value={1987}>1987</MenuItem>
                  <MenuItem value={1988}>1988</MenuItem>
                  <MenuItem value={1989}>1989</MenuItem>
                  <MenuItem value={1990}>1990</MenuItem>
                  <MenuItem value={1991}>1991</MenuItem>
                  <MenuItem value={1992}>1992</MenuItem>
                  <MenuItem value={1993}>1993</MenuItem>
                  <MenuItem value={1994}>1994</MenuItem>
                  <MenuItem value={1995}>1995</MenuItem>
                  <MenuItem value={1996}>1996</MenuItem>
                  <MenuItem value={1997}>1997</MenuItem>
                  <MenuItem value={1998}>1998</MenuItem>
                  <MenuItem value={1999}>1999</MenuItem>
                  <MenuItem value={2000}>2000</MenuItem>
                  <MenuItem value={2001}>2001</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <FormControl>
          <TextField
            type="email"
            id="standard-basic"
            label="Email Address"
            variant="standard"
            onChange={(e) => {
              setData({
                ...data,
                email: e.target.value,
              });
            }}
            required
            sx={{
              mt: 1.5,
            }}
          />
          <label>Must contain "@" and "."</label>
          </FormControl>
          <TextField
            type="number"
            id="standard-basic"
            label="Mobile Number"
            variant="standard"
            onKeyPress={(event) => {
              if (isNaN(Number(event.key))) {
                event.preventDefault();
              }
            }}
            value={inp}
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                setInp(e.target.value);
                setData({
                  ...data,
                  mobile: e.target.value,
                });
              }
            }}
            required
            sx={{
              mt: 1.5,
            }}
          />
          <FormControl variant="standard">
            <Typography variant="subtitle1">Relationship Status *</Typography>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Relationship"
              onChange={(e) => {
                setData({
                  ...data,
                  relationship: e.target.value,
                });
              }}
              required
            >
              <MenuItem disabled value="">
                <em>Select...</em>
              </MenuItem>
              <MenuItem value="married">Married</MenuItem>
              <MenuItem value="livin">Living with partner</MenuItem>
              <MenuItem value="single">Single</MenuItem>
              <MenuItem value="seperated">Seperated</MenuItem>
              <MenuItem value="divorced">Divorced</MenuItem>
              <MenuItem value="widowed">Widowed</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="number"
            id="standard-basic"
            label="Number of Dependents"
            variant="standard"
            onKeyPress={(event) => {
              if (isNaN(Number(event.key))) {
                event.preventDefault();
              }
            }}
            value={inp2}
            onChange={(e) => {
              if (e.target.value.length <= 1) {
                setInp2(e.target.value);
                setData({
                  ...data,
                  noOfDependents: e.target.value,
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
    </Box>
  );
}

export default Personal;
