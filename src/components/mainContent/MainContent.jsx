import frontLogo from "../../assets/frontLogo.png.png";
import "./mainContent.css";
import { MdLock } from "react-icons/md";
import lockIcon from "../../assets/lockIcon.svg.png";

const MainContent = () => {
  return (
    <div className="bannerSection">
      <div className="hero">
        <img src={frontLogo} alt="front-logo" />
        <h2 className="bannerHeading">Pocket Notes</h2>
        <p className="bannerDescription">
          Send and receive messages without keeping your phone online.
          <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className="footer">
        <img src={lockIcon} alt="lockIcon" /> end-to-end encrypted
      </div>
    </div>
  );
};

export default MainContent;
