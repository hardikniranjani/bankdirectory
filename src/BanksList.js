import React, { useEffect, useState } from "react";
import TableData from "./datatable/index";
import "./BanksList.css"
import {Link , useParams} from 'react-router-dom';


function BanksList() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const {cities} = useParams();
  console.log(cities);
  
  useEffect(() => {
    fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [city]);

  const handleClick = (e) => {
    return setCity(e.target.value);
  };
  return (
    <div className="banks_list">
      
      <h1 style={{ marginLeft: "25px" }}><Link to="/" style={{ textDecoration:"none",  }}>{`<`}</Link> Bank Branches</h1>
      <div className="topnav">
        <div className="dropdown">
          {/* <button className="dropbtn">Cities</button>
          <div className="dropdown-content">
            <a  >Mumbai</a>
            <a >Delhi</a>
            <a >Ahemdabad</a>
            <a >Bangalore</a>
            <a >Chennai</a>
          </div> */}
           <select onClick={handleClick} className="dropbtn">
            <Link to={`/banks/${city}`}><option>MUMBAI</option></Link>;
           <Link to={`/banks/${city}`}><option>DELHI</option></Link>;
           <Link to={`/banks/${city}`}><option>AHMEDABAD</option></Link>;
           <Link to={`/banks/${city}`}><option>CHENNAI</option></Link>;
           <Link to={`/banks/${city}`}><option>BANGLORE</option></Link>;
          </select>
        </div>
        <input
          type="text"
          placeholder="Search.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="table">
        <TableData data={data} />
      </div>
    </div>
  );
}

export default BanksList;
