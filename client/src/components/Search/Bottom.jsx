import styled from "styled-components";
import { nanoid } from "nanoid";
import { useState } from "react";
import Star from '@mui/icons-material/StarBorder'
import ColoredStar from '@mui/icons-material/StarRate'
import Star2 from '@mui/icons-material/StarRateOutlined'
import { Link } from "react-router-dom";
const Style = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 30px;
  background-color: #e4e4e4;
  .filters {
    background-color: white;
    margin-left: 100px;
    padding: 5px 10px;
    height: 700px;
    box-shadow: 0px 0px 4px #c9c8c8;
    position: relative;
    top: -70px;
    border-radius: 12px;
  }
  .allData {
    margin-right: 100px;
    position: relative;
    top: -73px;
    h1 {
      color: white;
      position: relative;
      font-size: 30px;
      font-weight: 600;
      margin-top: 20px
    }
    .maping {
      background-color: white;
      position: relative;
      padding: 1%;
      padding-top: 20px;
      padding-bottom: 20px;
      top: -60px;
      margin-bottom: 10px;
      box-shadow: 0px 0px 4px #c9c8c8;
        border-radius: 12px;
        //start
      .div1 {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        padding: 5px;
        .one {
          display: flex;
          align-items: center;
          img {
            width: 75px;
            margin-top: 13px;
          }
          gap: 6px;
          p {
            font-size: 14px;
            font-weight: 700;
          }
        }
        a{
          text-decoration: none;
          color: white;
        }
        .two {
          display: flex;
          text-align: center;
          flex-direction: row;
          line-height: 10px;
          /* align-items: center; */
          h5 {
            padding-top: 12px;
            margin: 0;
            font-size: 22px;
            font-weight: 700;
            text-align: left;
          }
          p {
            font-size: 12px;
            font-weight: 600;
          }
        }
        .three {
          line-height: 0px;
          align-items: center;
          text-align: center;
          display: flex;
          flex-direction: column;
          p {
            font-size: 12px;
            font-weight: 600;
          }
          span {
            font-size: 11px;
            font-weight: 700;
          }
          div {
            width: 50px;
            height: 3px;
            position: relative;
            top: -5px;
            border-radius: 6px;
            background-color: red;
            margin: auto;
          }
        }
        h4 {
          align-items: center;
          font-size: 22px;
          position: relative;
          top: -20px;
        }
        button {
          width: 130px;
          height: 38px;
          border-radius: 25px;
          border-radius: 12px;
          background: #34495e;
          background: #00704A;
          cursor: pointer;
          border: none;
          color: white;
          font-weight: 600;
          font-size: 15px;
        }
      }
      .div2 {
        /* height: 60px; */
        background-color: #fff2dc;
        margin-top: 20px;
        text-align: center;
        font-size: 11px;
        padding: 1%;
      }
    }
    .div3 {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: auto;
      p:nth-child(1) {
        font-size: 13px;
        font-weight: 600;
        color: green;
      }
      p:nth-child(2) {
        font-size: 13px;
        font-weight: 400;
        color: blue;
      }
    }
  }
  .firstFilter *{
    outline: none;
  }
  .firstFilter {
    padding: 12px 15px;
    text-align: left;
    display: flex;
    flex-direction: column;
      border-bottom: #ddd 0.01px solid;
      padding-bottom: 24px;
      gap: 10px;
    h3 {
      color: #000000;
      font-size: 17px;
      line-height: 0px;
      text-align: left;
      font-weight: 600;
      margin-bottom: 15px;
      margin-top: 20px
    }
    .div {
      padding: 0;
      align-items: center;
      color: #000000;
      display: flex;
      font-size: 14px;
      p {
        color: #000000;
        font-size: 14px;
        padding: 0;
        margin: 0;
        line-height: 21px;
        font-weight: 500;
        margin-left: 10px;
        align-items: center;
      }
    }
  }
`;
export const Bottom = ({ data, bookData,sorting ,sorthigh}) => {
  const [value, setValue] = useState("");
  const handleSlider = (e) => {
    setValue(e.target.value);
  };
  const handleSort = (e)=>{
      sorting(e.target.checked)
  }
  const handleHigh = (e)=>{
    sorthigh(e.target.checked)
  }
  // let x = localStorage.getItem("myKey");
  // let y = JSON.parse(x);
  const imgs=['data:image/png;base64,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', 'https://static.startuptalky.com/2022/06/Golden-Crown-Ventures-Product-photography-StartupTalky.jpg', 'https://content.jdmagicbox.com/comp/ludhiana/b2/0161px161.x161.220412163951.v7b2/catalogue/-b6c7czozcn.jpg?clr=203346', 'https://simg.nicepng.com/png/small/870-8701432_logo-gold-queen-c-skin-studio-.png', 'https://static.startuptalky.com/2022/06/Golden-Crown-Ventures-Product-photography-StartupTalky.jpg', 'https://content.jdmagicbox.com/comp/ludhiana/b2/0161px161.x161.220412163951.v7b2/catalogue/-b6c7czozcn.jpg?clr=203346', 'https://simg.nicepng.com/png/small/870-8701432_logo-gold-queen-c-skin-studio-.png', 'https://static.startuptalky.com/2022/06/Golden-Crown-Ventures-Product-photography-StartupTalky.jpg', 'https://content.jdmagicbox.com/comp/ludhiana/b2/0161px161.x161.220412163951.v7b2/catalogue/-b6c7czozcn.jpg?clr=203346', 'https://simg.nicepng.com/png/small/870-8701432_logo-gold-queen-c-skin-studio-.png']
  return (
    <Style>
      <div className="filters">
        <h1 style={{marginLeft:'20px', marginTop: '10px', fontWeight: '700', fontSize: '30px'}}>FILTERS</h1>
        <div className="firstFilter">
          <h3>Sort by price</h3>
          <div className="div">
            <input onChange={handleSort} type="checkbox" />
            <p>Low to High</p>
          </div>
          <div className="div">
            <input onChange={handleHigh} type="checkbox" />
            <p>High to Low</p>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Select Range ₹{value}</h3>
          <input type="range" min="1000" max="10000" onChange={handleSlider} />
        </div>
      </div>
      <div className="allData">
        <h1 style={{color: 'black'}}>
          Top Photoshooting Agencies
        </h1>
        {[1,2,3,4,5,6,7].map((e) => (
          <div key={nanoid(6)} className="maping">
            <div className="div1">
              <div className="one">
                <img
                  src={imgs[Math.floor(Math.random()*10)]}
                  alt=""
                />
              </div>
              <div className="two">
                <h5>Pro Camera Agents</h5>
              </div>
              <div className="two">
                <ColoredStar style={{color:'goldenrod'}} /><ColoredStar style={{color:'goldenrod'}} /><ColoredStar style={{color:'goldenrod'}} /><Star /><Star />
              </div>
              <div style={{fontWeight: '700', fontSize: '20px'}}>
                {['₹1200', '₹2400', '₹5300', '₹1200', '₹2400', '₹5300', '₹1200', '₹2400', '₹5300', '₹4300'][Math.floor(Math.random()*10)]}
              </div>
              <button
                onClick={() => {
                  console.log('clicked')
                }}
              >
                {/* <Link to="/checkout">BOOK NOW</Link> */}
                BOOK NOW
              </button>
            </div>
            <div className="div2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius tenetur minus itaque dolore quidem est ipsum unde dolores. Qui ratione possimus debitis sed nam cupiditate optio quos voluptates atque dolores. Veritatis iste magni quisquam rem officiis suscipit voluptas eligendi ipsa magnam dignissimos distinctio neque accusamus reiciendis, tenetur vel fugiat fugit alias, a, ab libero! Non blanditiis vero impedit repudiandae vel.
            </div>
            <div className="div3">
              <p></p>
              <p style={{cursor:'pointer'}}>View Details</p>
            </div>
          </div>
        ))}
      </div>
    </Style>
  );
};
