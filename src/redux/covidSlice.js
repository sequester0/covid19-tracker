import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { countries } from "./defaultCountries";

export const fetchCovidData = createAsyncThunk(
  "covid/getCovidData",
  async (country) => {
    let response;
    if (country === "Global") {
      response = await axios.get(`https://covid19.mathdro.id/api`);
    } else {
      response = await axios.get(
        `https://covid19.mathdro.id/api/countries/${country}`
      );
    }
    console.log(response.data);
    return response.data;
  }
);

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    selectedCountry: "Global",
    countries: countries,
    values: [],
    status: "idle",
  },
  reducers: {
    setSelectedCountry: (state, action) => {
      const { iso3 } = action.payload;
      state.selectedCountry = iso3;
      state.status = "idle";
    },
  },
  extraReducers: {
    [fetchCovidData.fulfilled]: (state, action) => {
      state.values = action.payload;
      state.status = "succeeded";
    },
    [fetchCovidData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCovidData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { setSelectedCountry } = covidSlice.actions;
export default covidSlice.reducer;
