import React from "react";
import "./Frontend.css"
import Navbar from '../components/Navbar/Navbar.jsx';
import Card from '../components/Cards/Card.jsx';
import BoxSection from '../components/Box/Box.jsx';
import LeftSection from '../components/LeftSection/LeftSection.jsx';
import LegalResources from '../legalcomponnents/Legalresources.jsx';
import { useNavigate } from "react-router-dom";
const Front = () => {
  const navigate=useNavigate();

  return (
    <div className="App">
      <Navbar />

      <section className="content-section">
        <Card />

        <div className="content-text">
          <h1>Welcome to Our Website LegalBodh</h1>
          <p>
            you can connect here with us, we are family and don't hesitate to
            tell us anything
          </p>
          <button className="explore-button" onClick={()=>navigate('/chatting')} >Chat with Lawyer</button>
        </div>
      </section>

      <section className="sectionX">
        <div className="content">
          <LeftSection />
          {/* Add image and paragraph section */}
        </div>

        <div className="boxes">
          <BoxSection />
          {/* Other components or sections */}
        </div>
        <div className="image-section">
          <img src="path/to/your/image" alt="Legal Image" />
        </div>
        <div className="text-section">
          <h1>this is image section </h1>
          <div className="para1">
            <p className="p-1">
              {" "}
              <h3>Connect with our </h3>{" "}
            </p>
            <br />
            <p className="p-2">
              {" "}
              <h3>Legal Advisors </h3>{" "}
            </p>
            <p>
              {" "}
              Connect with our legal advisors, they will provide you the best
              advise about your problems and guide you for better future and
              help you in understanding your rights
            </p>{" "}
            <br />
            <button className="btn">Talk to Lawyer </button>
          </div>
        </div>

        <div className="text-section2">
          <h1>Select your Problem category </h1>
          <div className="box1">
            <div className="boxx1">
              <p>
                <h2>Civil </h2>{" "}
              </p>
            </div>
            <div className="boxx2">
              <p>
                <h2>Labour </h2>
              </p>
            </div>

            <div className="boxx3">
              <p>
                <h2> Prisoner </h2>
              </p>
            </div>

            <div className="boxx4">
              <p>
                <h2>citizens </h2>
              </p>
            </div>
          </div>
          <br />
          <br />

          <div className="box2">
            <div className="boxx5">
              <p>
                {" "}
                <h2>child </h2>{" "}
              </p>
            </div>
            <div className="boxx6">
              <p>
                {" "}
                <h2>Education </h2>
              </p>
            </div>

            <div className="boxx7">
              <p>
                {" "}
                <h2>consumer </h2>{" "}
              </p>
            </div>

            <div className="boxx8">
              <p>
                <h2>Other </h2>
              </p>
            </div>
          </div>

          <div className="boxxx"></div>
        </div>
      </section>
    </div>
  );
};

export default Front;
