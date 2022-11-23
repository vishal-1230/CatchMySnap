import FlightIcon from "@mui/icons-material/FestivalOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/Instagram";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/CorporateFare";
import { useState } from "react";
import './home.css'
import bg from './cms1.png';
import { Link } from "react-router-dom";

const Header = (props) => {
  const handlePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handleChange);

  return (
    <div className="bg-grey1">
      <div className="flex justify-between align-middle bg-white rounded-xl m-4">
        <div className="imgdiv">
          <Link to="/">
            <img src={bg} className='w-44 p-6' alt="Logo" />
          </Link>
        </div>
        {/* <div className="flex justify-center items-center">
          <div className="flex justify-center items-center px-6 cursor-pointer" onClick={()=>{props.wHandler(true); props.iHandler(false); props.oHandler(false); props.cHandler(false); props.hHandler(false)}}>
            <span className="flex justify-center">
              <FlightIcon></FlightIcon>
            </span>
            <p className="text-sm p-2 hover:text-cms-bright hover:font-bold duration-300	">Wedding Photoshoots</p>
          </div>
          <div className="flex justify-center items-center px-6 cursor-pointer" onClick={()=>{props.wHandler(false); props.iHandler(true); props.oHandler(false); props.cHandler(false); props.hHandler(false)}}>
            <span className="flex justify-center">
              <HotelIcon ></HotelIcon>
            </span>
            <p className="text-sm p-2 hover:text-cms-bright hover:font-bold duration-300	">Instagram Shoots</p>
          </div>
          <div className="flex justify-center items-center px-6 cursor-pointer" onClick={()=>{props.wHandler(false); props.iHandler(false); props.oHandler(true); props.cHandler(false); props.hHandler(false)}}>
            <span className="flex justify-center">
              <HomeWorkIcon ></HomeWorkIcon>
            </span>
            <p className="text-sm p-2 hover:text-cms-bright hover:font-bold duration-300	">Occassional Shoots</p>
          </div>
          <div className="flex justify-center items-center px-6 cursor-pointer" onClick={()=>{props.wHandler(false); props.iHandler(false); props.oHandler(false); props.cHandler(true); props.hHandler(false)}}>
            <span className="flex justify-center">
              <HolidayVillageIcon></HolidayVillageIcon>
            </span>
            <p className="text-sm p-2 hover:text-cms-bright hover:font-bold duration-300	">Corporate Shoots</p>
          </div>
          <div className="flex justify-center items-center px-6 cursor-pointer" onClick={()=>{props.wHandler(false); props.iHandler(false); props.oHandler(false); props.cHandler(false); props.hHandler(true)}}>
            <span className="flex justify-center">
              <TrainIcon ></TrainIcon>
            </span>
            <p className="text-sm p-2 hover:text-cms-bright hover:font-bold duration-300	">Hotel and Resort Shoots</p>
          </div>
        </div> */}
        {/* <div className="trialDiv flex"> */}
          <span className="font-semibold self-center cursor-pointer">Top Vendors</span>
          <span className="font-semibold self-center cursor-pointer">Venues</span>
          <span className="font-semibold self-center cursor-pointer">Coupons & Deals</span>
          <span className="font-semibold self-center cursor-pointer">Ideas</span>
          <span></span>
          {/* <div className="align-middle justify-center flex-col"> */}
          <div id="google_translate_element" className="self-center mt-4 ml-16 -mr-10"></div>
          {/* </div> */}
        {/* </div> */}
        <div className="login">
          {/* <Login handleClick={handlePopup}/> */}
        </div>
        <div className="flex justify-center items-center m-4 ml-2">
          <button className="p-2 h-fit mr-6 border-2 px-4 self-center rounded-lg font-medium text-sm hover:bg-cms-black hover:text-white hover:border-2 hover:border-cms-black hover:rounded-lg duration-75">Are you a Vendor?</button>
        <button className="text-cms-deep-red border-2 font-semibold rounded-xl w-32 h-10 hover:text-white hover:bg-cms-main-red hover:border-2 hover:border-cms-main-red duration-300">LOGIN</button>
        </div>
      </div>
    </div>
  );
};
export default Header