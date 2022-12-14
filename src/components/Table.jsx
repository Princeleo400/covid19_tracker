import React from "react";
import "./style.scss";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((country) => (
        <tr>
          <td>
            <img
              style={{ width: 30, height: 20 }}
              src={country.countryInfo.flag}
              alt=""
            />{"  "}
            {country.country}
          </td>
          <td>
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
