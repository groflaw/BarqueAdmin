import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LanguageOption from "./LanguageOption";
import UserProfile from "./UserProfile";


import headermark from "../../assets/Icons/headermark.png";
import bellimg from "../../assets/Icons/bell.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleLogout = () => {
  //   navigate("/");
  //   dispatch(clearCart());
  //   dispatch(logoutUser());
  // };

  return (
    <header className="text-neutral-content box-border shadow-md pl-8 pr-8">
      <div className="flex justify-start flex-row pt-1 pb-1  box-border items-center">
        <div className="w-1/6 ">
          <img src={headermark} alt="" />
        </div>
        <div className="w-5/6  flex flex-row justify-between items-center">
          <span style={styles.title}>Boats</span>
          <div className="flex flex-row items-center gap-4">
            <LanguageOption />
            <img src={bellimg} alt="" style={styles.bell} className="cursor-pointer"/>
            <UserProfile></UserProfile>
          </div>
        </div>
      </div>
    </header>
  );
};

const styles = {
  title: {
    color: "#04004e",
    fontSize: "23px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "30px",
  },
  bell : {
    width : 35,
    height : 35
  }
};
export default Header;
