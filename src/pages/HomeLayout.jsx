import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components";
import {Loading} from "../components";
import {Sidebar} from "../components";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <>
          <nav>
            <Header />
          </nav>
          <div className="flex flex-row w-full ">
            <div className="w-1/6 pl-8 pr-8 pt-2 shadow-md">
              <Sidebar/>
            </div>
            <div className="w-5/6 ">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeLayout;
