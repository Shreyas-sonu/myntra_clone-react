import React, { useState, useEffect, useContext } from "react";
import { BrandDiv, CategoryDiv } from "./Brandfilterstyle";
import { FilterContext } from "../../../context/FilterContext";
import SearchIcon from '@mui/icons-material/Search';
function Brandfilter() {
  const [datas, setData] = useState([]);
  // const [brandNames, setBrandNames] = useState([]);

  const { handleEvent ,isChecked,data} = useContext(FilterContext);
  let arr = [];
  let categArr = [];
  let colorArr=[]
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("https://myntrafinaldata.herokuapp.com/women");
      let data = await res.json();
      setData(data);
      //   console.log(data);
    };
    getData();
  }, []);

  datas.map((ele) => {
    arr.push(ele.brand);
    categArr.push(ele.categories || ele.category);
    colorArr.push(ele.color)
  });

  categArr = [...new Set(categArr)];
  colorArr = [...new Set(colorArr)]
  // console.log(colorArr);
  let brandArr = [...new Set(arr)];
  // console.log(brandArr);
  const handleChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.checked)

    // console.log(e)
    handleEvent(e.target.name, e.target.checked);
  };
  const handldeRemove =() => {
   
  }
  return (
    <div style={{ width: "20%", textAlign: "left", margin: "10px" }}>
      <div style={{display:"flex" , justifyContent:"space-between"}}> <h3>FILTERS</h3>
        {data.length>0?<h3 style={{color:"#e7396a"}} onClick={handldeRemove}>Clear All</h3>:<h3></h3> }</div>
      <div style={{borderTop:".03px solid lightgrey",borderRight:".03px solid lightgrey",borderBottom:".03px solid lightgrey"}}>
      <div style={{display:"flex", alignItems:"center" , justifyContent:"space-between"}}> <h3>BRAND</h3> <div style={{background:"#f5f5f6" , color:"grey" ,marginRight:"5px" , borderRadius:"50%"}}><SearchIcon style={{cursor:"pointer"}}/></div></div>
        {brandArr.map((ele, i) => {
          return (
            <BrandDiv key={i}>
              <input type="checkbox" onChange={handleChange} name={ele} style={{cursor:"pointer"}}></input>
              <label style={{textTransform:"capitalize",cursor:"pointer"}}>{ele}</label>
            </BrandDiv>
          );
        })}
      </div>

      <div style={{borderTop:".03px solid lightgrey",borderRight:".03px solid lightgrey",borderBottom:".03px solid lightgrey"}}>
       <div style={{display:"flex", alignItems:"center" , justifyContent:"space-between"}}> <h3>CATEGORY</h3> <div style={{background:"#f5f5f6" , color:"grey" ,marginRight:"5px" , borderRadius:"50%"}}><SearchIcon style={{cursor:"pointer"}}/></div></div>
        {categArr.map((ele, i) => {
          return (
            <CategoryDiv key={i}>
              <input type="checkbox" onChange={handleChange} name={ele}  style={{cursor:"pointer"}}></input>
              <label style={{textTransform:"capitalize",cursor:"pointer"}}>{ele}</label>
            </CategoryDiv>
          );
        })}
      </div>
      <div style={{borderTop:".03px solid lightgrey",borderRight:".03px solid lightgrey",borderBottom:".03px solid lightgrey"}}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}> <h3>COLOR</h3> <div style={{ background: "#f5f5f6", color: "grey", marginRight: "5px", borderRadius: "50%" }}><SearchIcon style={{cursor:"pointer"}}/></div></div>
        {colorArr.map((ele, i) => {
          return (
            <CategoryDiv key={i}>
              <input type="checkbox" onChange={handleChange} name={ele}  style={{cursor:"pointer"}}></input>
              <div style={{ background: `${ele}`, width: "12px",height: "12px", borderRadius:"50%", border:"0.5px solid lightgrey" }}></div>
              <label style={{textTransform:"capitalize",cursor:"pointer"}}>{ele}</label>
            </CategoryDiv>
          );
        })}
      </div>
    </div>
  );
}

export default Brandfilter;
