import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function Calendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          orientation="portrait"
          openTo="day"
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
