import React, { useEffect, useState }from "react";
import "./index.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';



function TableData({ data }) {

  var [clicked, setClicked] = useState();

  const handleChange = (i) => {
    if(i == i){
      if(clicked == false) {
        setClicked(clicked = true);
      }else{
        setClicked(clicked = false);
      }}
  }

  return (
    <table className="table_data_main">
      <tr>
        <th>Favorite</th>
        <th>Bank Name</th>
        <th>Branch</th>
        <th>District</th>
        <th>Bank id</th>
        <th>ifsc</th>
        <th>Address</th>
      </tr>
      {data.map((item, i) => (
        <tr key={i}>
          <th className="fav_icon" onClick={() => handleChange(i)}>{clicked ? (<FavoriteIcon style={{color:"rgb(236, 103, 148)"}}/>):(<FavoriteBorderIcon  />) }</th>
          <th className="th_data">{item.bank_name}</th>
          <th className="th_data">{item.branch}</th>
          <th className="th_data">{item.district}</th>
          <th className="th_data">{item.bank_id}</th>
          <th className="th_data">{item.ifsc}</th>
          <th className="th_data">
            {item.address},{item.state}
          </th>
        </tr>
      ))}
    </table>
  );
}

export default TableData;
