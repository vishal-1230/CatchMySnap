import { Navbar } from "./Navbar";
import { Smallbutton } from "./Smallbutton";
import { Icondiv } from "./Icondiv";
import { Bookingcss } from "./Bookingcss";
import { Fromto } from "./Fromto";
import { MultipleSlidesExample, BigSlidesExample } from "./Slidebar";
import { Bigslide, TripMoney } from "./Slidecss";
import { Bottom } from "./Bottom";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { SmallBottom } from "./SmallBottom";
import { useState } from "react";
// import { Login } from "../login/Login";
import bg from './cms2.png'

export const Main = () => {
  const [data, setData] = useState({
    from: "",
    to: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const addLocal = () => {
    localStorage.setItem("myKey", JSON.stringify(data));
  };
  const handlePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };
  const [single, setsingle] = useState(true)
  return (
    <div>
      <Header></Header>
      <Navbar>
        <div className="topdiv">
          <img
            className="laltain nav-bg"
            src=''
            alt=""
          />
          {/* <Link to="/"> */}
            <img
              className="mmtlogo"
              src=
                {bg}
              
              alt="Logo"
            />
          {/* </Link> */}
          <div className="login">
          {/* <Login handleClick={handlePopup}/> */}
          </div>
          <Smallbutton>
            {/* <div className="smallbuttonpic">
              <LanguageIcon></LanguageIcon>
            </div>
            <div>
              <h4>My Shoots</h4>
              <p>Manage your Bookings</p>
            </div> */}
          </Smallbutton>
          <Smallbutton>
            <div className="smallbuttonpic">
              <img
                src="https://imgak.mmtcdn.com/mybiz/assets/images/landing/myBizLogo_light.png"
                alt=""
              />
            </div>
            <div>
              <h4>Introducing myBiz</h4>
              <p>CatchMySnap for Buisness</p>
            </div>
          </Smallbutton>
        </div>
        <Bookingcss>
          <Icondiv className="icondiv"></Icondiv>
          <div className="checkboxdiv">
            <div>
              {" "}
              <input type="radio" name='shooting-days' onClick={()=>{setsingle(true)}} />
              <label htmlFor="a">Single Day Shoot</label>
              <input type="radio" name='shooting-days' onClick={()=>{setsingle(false)}} />
              <label htmlFor="a">Multiple Days Shoot</label>
            </div>
          </div>
          <Fromto single={single} handleChange={handleData} />
        </Bookingcss>
        <div className="button">
          <button onClick={addLocal}>
            <Link to="/search">SEARCH</Link>
            {/* SEARCH */}
          </button>
        </div>
      </Navbar>
      <div style={{ background: "#ebe7e7", paddingTop: "50px" }}>
        <SmallBottom />
        <div style={{ width: "90%", margin: "auto" }}>
          <MultipleSlidesExample />
        </div>
        <Bigslide>
          <div className="supreoffers">
            <h1>Super Offers</h1>
            <div>
              <h3>ALL OFFERS</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h3>BANK OFFERS</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h3>LOCATION OFFERS</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h3>MORE</h3>&nbsp;
            </div>
          </div>
          <BigSlidesExample className="bigslideex"></BigSlidesExample>
        </Bigslide>
        <TripMoney>
          <div className="maindiv">
            <div id="div2" style={{ borderColor: "#e47dad" }}>
              <img
                src="https://www.tripmoney.com/ext/static/TravelLoan/travelLoan.png"
                alt=""
              />
              <div>
                {/* <div className="spa1n"></div> */}
                <h3>Personal loan</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur.</p>
              </div>
              {/* <div className="span2"></div> */}
            </div>
            <div id="div2" style={{ borderColor: "#dde47d" }}>
              <img
                src="https://www.rswebsols.com/wp-content/uploads/2020/06/canon-point-and-shoot-zoom-digital-camera-920x518.jpg"
                alt=""
              />
              <div>
                {/* <div className="spa1n"></div> */}
                <h3>Best Photograpers</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed.</p>
              </div>
              <div className="span2"></div>
            </div>
            <div id="div2" style={{ borderColor: "#7dbee4" }}>
              <img
                src="https://static.toiimg.com/photo/msid-87107688,width-96,height-65.cms"
                alt=""
              />
              <div>
                {/* <div className="spa1n"></div> */}
                <h3>Shooting Locations</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem!</p>
              </div>
              <div className="span2"></div>
            </div>
          </div>
        </TripMoney>
        <Bottom />
      </div>
    </div>
  );
};
