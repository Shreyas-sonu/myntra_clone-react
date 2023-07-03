import React from "react";
import Brandfilter from "../Component/filters/brand/Brandfilter";
import Card from "../Component/cards/Card";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
function MensPage() {
  return (
    <>
      <Navbar/>
      <div style={{ display: "flex" }}>
        <Brandfilter />
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default MensPage;
