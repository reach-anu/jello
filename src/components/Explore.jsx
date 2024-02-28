import explore1 from "../assets/ExploreSection/explore1.png";
import explore2 from "../assets/ExploreSection/explore2.png";
import explore3 from "../assets/ExploreSection/explore3.png";
import explore4 from "../assets/ExploreSection/explore4.png";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="exploreContainer">
      <div className="exploreImageSection">
        <img src={explore2} alt="" />
        <div className="exploreIconsWrapper">
          <div className="exploreIcons">
            <CiCircleChevLeft />
            <CiCircleChevRight />
          </div>
          <p style={{ textAlign: "right" }}>01</p>
        </div>
      </div>
      <div className="exploreTextContainer">
        <Link to="/products">
          <h2 style={{ color: "#eb6d27" }}>
            EXPLORE NOW{" "}
            <span style={{ fontSize: "25px" }}>
              <CiCircleChevRight />
            </span>
          </h2>
        </Link>
        <h1>Latest Women Clothing</h1>
        <p>
          Are u ready to rock this season with our new collection specially for
          you to shine in this holiday season..
        </p>
      </div>
      <div className="exploreImage">
        <img src={explore3} alt="" />
        <img src={explore4} alt="" />
        <img src={explore1} alt="" />
      </div>
    </div>
  );
};

export default Explore;
