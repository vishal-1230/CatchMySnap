
import 'react-slideshow-image/dist/styles.css'
import { Slide } from "react-slideshow-image";
import {Smallslide} from './Smallslide'
export const MultipleSlidesExample = () => {
  const properties = {
    duration: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
    transitionDuration: 400,
    infinite: true,
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          <div><Smallslide para={'Students Special Offer [Limited Offer till December 31, 2022] '} image={"https://image.shutterstock.com/image-photo/video-camera-lens-260nw-180430088.jpg"} className='img123'/></div>
          <div><Smallslide para={'We are now available in हिंदी!'} image={"https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png"}/></div>
          <div><Smallslide para={'Many international destinations open for Indians now'} image={"https://promos.makemytrip.com/appfest/2x/quarantine.png"}/></div>
          <div><Smallslide para={'Going abroad for education, employment or the Olympics?'} image={"https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png"}/></div>
          <div><Smallslide para={'Call 01244628747 for international booking... '} image={"https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png"}/></div>
        </Slide>
      </div>
    </div>
  );
};

export const BigSlidesExample = () => {
  const properties = {
    duration: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
    transitionDuration: 300,
    infinite: false,
  };

  return (
    <div style={{width: '90%', margin: 'auto'}}>
      <div>
        <Slide {...properties}>
      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://res.cloudinary.com/purnesh/image/upload/f_auto/v1603702824/101603702823042.jpg" style={{width: '100px'}} alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>GENERAL </h3>
          <h2>#JoHogaWOWhoga: Book you Photoshoots at 30% off now.</h2>
          <div className="reddiv"></div>
          <p>Offer valid at HDFC credit card and EasyEMI.</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>

      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/06/shutterstock_1315074770.jpg?w=120" style={{height: ''}} alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>DOM FLIGHTS </h3>
          <h2>Up to Rs. 1500 Cashback on Indoor Shoots!</h2>
          <div className="reddiv"></div>
          <p>Valid on Axis Bank Credit & Debit Cards</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>

      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://promos.makemytrip.com/notification/xhdpi//116X116-ICICI-DH-03072021.jpg" alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>DOM HOTELS </h3>
          <h2>Grab FLAT 15% OFF* on 1 Month prior Booking</h2>
          <div className="reddiv"></div>
          <p>& treat yourself to a refreshing, luxurious break.</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>

      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://promos.makemytrip.com/notification/xhdpi//116X116-MumbaiHotels-08112021.jpg" alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>GENERAL </h3>
          <h2>Wow Deal: Up to 25% OFF* with an amazing gift</h2>
          <div className="reddiv"></div>
          <p>on hotel stays in Mumbai. Limited period offer.</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>

      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://res.cloudinary.com/purnesh/image/upload/f_auto/v1603702824/101603702823042.jpg" style={{width: '100px'}} alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>GENERAL </h3>
          <h2>#JoHogaWOWhoga: Book you Photoshoots at 30% off now.</h2>
          <div className="reddiv"></div>
          <p>Offer valid at HDFC credit card and EasyEMI.</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>

    
        </Slide>
      </div>
    </div>
  );
};

