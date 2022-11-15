import React from 'react'
import { Link } from "react-router-dom";

function TrialHomepage() {
  return (
        <div>
      <div className={nav ? "icondiv" : "disnone"}>
        <div className="imgdiv">
          <Link to="/">
            <img src={bg} className='mmtlogo' alt="Logo" />
          </Link>
        </div>
        <div className="icons">
          <div>
            <span>
              <FlightIcon style={{ fontSize: 30, padding: 4 }}></FlightIcon>
            </span>
            <p>Wedding Photoshoots</p>
          </div>
          <div>
            <span>
              <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon>
            </span>
            <p>Instagram Shoots</p>
          </div>
          <div>
            <span>
              <HomeWorkIcon style={{ fontSize: 30, padding: 4 }}></HomeWorkIcon>
            </span>
            <p>Occassional Shoots</p>
          </div>
          <div>
            <span>
              <HolidayVillageIcon
                style={{ fontSize: 30, padding: 4 }}
              ></HolidayVillageIcon>
            </span>
            <p>Corporate Shoots</p>
          </div>
          <div>
            <span>
              <TrainIcon style={{ fontSize: 30, padding: 4 }}></TrainIcon>
            </span>
            <p>Hotel and Resort Shoots</p>
          </div>
        </div>
        <div className="login">
        {/* <Login handleClick={handlePopup}/> */}
        </div>
      </div>
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
  )
}

export default TrialHomepage