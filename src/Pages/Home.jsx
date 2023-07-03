import React from "react";
import Footer from "../Component/Footer/Footer";
import InnerContent from "../Component/Home/InnerContent";
import Navbar from "../Component/Navbar/Navbar";

function Home() {
  return (
    <div>
      {" "}
      <Navbar />
      <InnerContent />
      <Footer />
    </div>
  );
}

export default Home;
