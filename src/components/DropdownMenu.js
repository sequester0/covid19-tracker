import { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovidData, setSelectedCountry } from "../redux/covidSlice";

function DropdownMenu() {
  const dispatch = useDispatch();
  const [country, selectedCountry] = useState("Global");
  const status = useSelector((state) => state.covid.status);
  const countries = useSelector((state) => state.covid.countries);
  const selectedCountryName = useSelector(
    (state) => state.covid.selectedCountry
  );

  useEffect(() => {
    dispatch(setSelectedCountry(country));
  }, [country]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCovidData(selectedCountryName));
    }
  }, [dispatch, status, country]);

  return (
    <div className="container">
      <div className="flex justify-content-center align-items-center">
        <Dropdown
          filter
          filterBy="name"
          className="mt-5 w-full"
          optionLabel="name"
          value={country}
          options={countries}
          onChange={(e) => selectedCountry(e.value)}
          placeholder="Select a City"
        />
      </div>
    </div>
  );
}

export default DropdownMenu;
