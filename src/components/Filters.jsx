import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const Filters = ({ handleFilterChange, filters, movieNames }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 3,
        flexWrap: "wrap",
        my: 3
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search by name"
        variant="outlined"
        value={filters.searchName}
        onChange={(e) => handleFilterChange("searchName", e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Min mass"
        variant="outlined"
        type="number"
        value={filters.minMass}
        onChange={(e) => handleFilterChange("minMass", e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Max mass"
        variant="outlined"
        type="number"
        value={filters.maxMass}
        onChange={(e) => handleFilterChange("maxMass", e.target.value)}
      />
      <FormControl sx={{ minWidth: 250 }}>
        <InputLabel id="demo-simple-select-label">Select movie</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select movie"
          value={filters.selectedMovie}
          onChange={(e) => handleFilterChange("selectedMovie", e.target.value)}
        >
          <MenuItem value="">All Movies</MenuItem>
          {movieNames.map((movie) => (
            <MenuItem key={movie} value={movie}>
              {movie}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <FormControlLabel
          label="All"
          control={
            <Checkbox
              checked={filters.gender === ""}
              onChange={(e) => handleFilterChange("gender", e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
              value=""
            />
          }
        />
        <FormControlLabel
          label="Male"
          control={
            <Checkbox
              checked={filters.gender === "male"}
              onChange={(e) => handleFilterChange("gender", e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
              value="male"
            />
          }
        />
        <FormControlLabel
          label="Female"
          control={
            <Checkbox
              checked={filters.gender === "female"}
              onChange={(e) => handleFilterChange("gender", e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
              value="female"
            />
          }
        />
        <FormControlLabel
          label="N/A"
          control={
            <Checkbox
              checked={filters.gender === "n/a"}
              onChange={(e) => handleFilterChange("gender", e.target.value)}
              inputProps={{ "aria-label": "controlled" }}
              value="n/a"
            />
          }
        />
      </Box>
    </Box>
  );
};

export default Filters;
