import FlightIcon from "@mui/icons-material/FestivalOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/Instagram";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/CorporateFare";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import bg from './cms1.png';
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Icondivcss = styled.div`
  .icondiv {
    height: 60px;
    margin-top: 20px;
    width: 100%;
    margin: auto;
    background-color: white;
    display: flex;
    flex-direction: row;
    position: sticky;
    z-index: 100;
    text-align: center;
    .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 60%;
      // margin-left: 10px;
      margin-top: 8px;

      p {
        padding: 0px;
        margin: -6px;
        color: #555454;
        color: #4f4f4f;
        font-size: 11px;
      }
      span {
        color: #4f4f4f;
        cursor: pointer;
      }
      span:hover {
        color: #0a3d62;
      }
      div{
        cursor: pointer;
      }
      div:hover {
        color: #0a3d62;
      }
    }
    .icons:hover{
      cursor: pointer;
      color: #0a3d62;
    }
  }
  .imgdiv {
    position: relative;
    top: 10px;
    left: 0px;
    img {
      width: 50%;
    }
  }
  .login {
position: relative;
top: 13px;
left: 150px;
  }
  .mmtLogo{
    margin: 0;
  // margin-top: -28px;  
  margin-left: 20px;
  height: 40px;
  min-width: 120px
  }
  .login button{
    margin-left: 30px;
    padding: 7px 16px;
    font-weight: 600;
    font-size: 13px;
    background: #f39c12;
    background: #34495e;
    background: #0a3d62;
    border-radius: 6px;
    border: 0;
    color: white;
  }
`;

export const Header = () => {
  const handlePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };
  return (
    <Icondivcss>
      <div className="icondiv">
        <div className="imgdiv">
        {/* <Link to="/"> */}
        
            <img src={bg} className="mmtLogo" alt="Logo" />
          {/* </Link> */}
        </div>
        <div className="icons" style={{}}>
          <div>
            <span>
              <FlightIcon style={{ fontSize: 30, padding: 4 }}></FlightIcon>
            </span>
            <p>Wedding Photoshoots</p>
          </div>
          <div>
            <span>
              <HomeWorkIcon style={{ fontSize: 30, padding: 4 }}></HomeWorkIcon>
            </span>
            <p>Instagram Shoots</p>
          </div>
          <div>
            <span>
              <HolidayVillageIcon
                style={{ fontSize: 30, padding: 4 }}
              ></HolidayVillageIcon>
            </span>
            <p>Occassional Shoots</p>
          </div>
          <div>
            <span>
              
              <TrainIcon style={{ fontSize: 30, padding: 4 }}></TrainIcon>
            </span>
            <p>Corporate Shoots</p>
          </div>
          <div>
            <span>
              <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon>
            </span>
            <p>Hotel and Resorts</p>
          </div>
          
          
          
        </div>
        <div className="login">
          <Link to='/login'><button>LOGIN</button></Link>
          <Link to='/login'><button>SIGNUP</button></Link>
        </div>
      </div>
    </Icondivcss>
  );
};
