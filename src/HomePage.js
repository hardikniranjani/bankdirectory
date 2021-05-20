import React, { useEffect, useState } from "react";
import TableData from "./datatable/index";
import "./HomePage.css";
import Loading from "./Loading";
import { trackPromise } from "react-promise-tracker";
import Pagination from "./datatable/Pagination";

function HomePage() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(100);

  useEffect(() => {
    trackPromise(
      fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`)
        .then((res) => res.json())
        .then((result) => setData(result))
    );
  }, [city]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);


  const handleClick = (e) => {
    return setCity(e.target.value);
  };

  function search(data) {
    const columns = data[0] && Object.keys(data[0]);
    return data.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(input.toLowerCase()) > -1
      )
    );
  }

  return (
    <div className="homepage">
      <h1 style={{ marginLeft: "25px", marginTop: "20px"}}>Bank Branches</h1>
      <div className="topnav">
        <div className="dropdown">
          <select onClick={handleClick} className="dropbtn">
            <option>MUMBAI</option>;
            <option>DELHI</option>;
            <option>AHMEDABAD</option>;
            <option>CHENNAI</option>;
            <option>BANGLORE</option>;
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
        <Loading />
        <TableData  data={search(currentPosts)} />
        <div className="pagelist">
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
      </div>
      </div>
    </div>
  );
}

export default HomePage;
