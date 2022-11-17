import FlightIcon from "@mui/icons-material/FestivalOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/Instagram";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/CorporateFare";
// import DirectionsBusFilledIcon from "@mui/icons-material/Hotel";
// import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import styled from "styled-components";
import { useState } from "react";
import bg from './cms1.png';
import { Link } from "react-router-dom";
// import { Login } from "../login/Login";
// const Icondivcss = styled.div`
//   .icondiv {
//     height: 60px;
//     width: 100%;
//     margin: auto;
//     background-color: white;
//     display: flex;
//     flex-direction: row;
//     position: fixed;
//     z-index: 100;
//     text-align: center;
//     box-shadow: 1px 3px 5px #c0c0c0;
//     .icons {
//       display: flex;
//       flex-direction: row;
//       justify-content: space-around;
//       width: 60%;
//       p {
//         padding: 0px;
//         margin: -6px;
//         color: #555454;
//         font-size: 11px;
//       }
//       span {
//         color: #a3a3a3;
//         cursor: pointer;
//       }
//       span:hover {
//         color: #2db0fc;
//       }
//       div:hover {
//         color: #2db0fc;
//       }
//     }
//   }
//   .disnone {
//     display: none;
//   }
//   .imgdiv {
//     position: relative;
//     top: 10px;
//     left: 0px;
//     img {
//     }
//   }
// .login{
//   position: relative;
//   top: 10px;
//   left: 150px;
// }
// .mmtlogo{
//   margin: 0;
//   margin-left: 25px;
//   width: 110px;
// }
// `;
const Header = () => {
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
      <div className="flex justify-center bg-white rounded-xl m-4">
        <div className="imgdiv">
          <Link to="/">
            <img src={bg} className='w-44 p-6' alt="Logo" />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center px-6">
            <span className="flex justify-center">
              <FlightIcon></FlightIcon>
            </span>
            <p className="text-sm p-2 hover:text-cms-bright hover:font-bold duration-300	">Wedding Photoshoots</p>
          </div>
          <div className="flex justify-center items-center px-6">
            <span className="flex justify-center">
              <HotelIcon ></HotelIcon>
            </span>
            <p className="text-sm p-2">Instagram Shoots</p>
          </div>
          <div className="flex justify-center items-center px-6">
            <span className="flex justify-center">
              <HomeWorkIcon ></HomeWorkIcon>
            </span>
            <p className="text-sm p-2">Occassional Shoots</p>
          </div>
          <div className="flex justify-center items-center px-6">
            <span className="flex justify-center">
              <HolidayVillageIcon></HolidayVillageIcon>
            </span>
            <p className="text-sm p-2">Corporate Shoots</p>
          </div>
          <div className="flex justify-center items-center px-6">
            <span className="flex justify-center">
              <TrainIcon ></TrainIcon>
            </span>
            <p className="text-sm p-2">Hotel and Resort Shoots</p>
          </div>
        </div>
        <div className="login">
          {/* <Login handleClick={handlePopup}/> */}
        </div>
        <div className="flex justify-center items-center m-4">
        <button className="text-cms-deep-red border-2 rounded-xl mr-14 -ml-32 w-32 h-10 hover:text-white hover:bg-cms-main-red duration-300">LOGIN</button>
        </div>
      </div>
    </div>
  );
};
export default Header