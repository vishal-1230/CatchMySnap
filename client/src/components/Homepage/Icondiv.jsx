import FlightIcon from "@mui/icons-material/FestivalOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/Instagram";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/CorporateFare";
import DirectionsBusFilledIcon from "@mui/icons-material/Hotel";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import {Icondivcss} from "./Icondivcss";
export const Icondiv = () => {
  return (
    <Icondivcss>
      <div className="icondiv">
        <div>
          <span>
            <FlightIcon style={{ fontSize: 40, padding: 4 }}></FlightIcon>
          </span>
          <p>Wedding Photoshoots</p>
        </div>
        {/* <div>
          <span>
            <HotelIcon style={{ fontSize: 40, padding: 4 }}></HotelIcon>
          </span>
          <p>Hotels</p>
        </div> */}
        <div>
          <span>
            <HomeWorkIcon style={{ fontSize: 40, padding: 4 }}></HomeWorkIcon>
          </span>
          <p>Instagram Shoots</p>
        </div>
        <div>
          <span>
            <HolidayVillageIcon
              style={{ fontSize: 40, padding: 4 }}
            ></HolidayVillageIcon>
          </span>
          <p>Occassional Shoots</p>
        </div>
        <div>
          <span>
            <TrainIcon style={{ fontSize: 40, padding: 4 }}></TrainIcon>
          </span>
          <p>Corporate Shoots</p>
        </div>
        <div>
          <span>
            <DirectionsBusFilledIcon
              style={{ fontSize: 40, padding: 4 }}
            ></DirectionsBusFilledIcon>
          </span>
          <p>Hotels & Resort Shoots</p>
        </div>
        
        
        
        
      </div>
    </Icondivcss>
  );
};
