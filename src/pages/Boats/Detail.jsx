import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DetailImg from "../../assets/Background/DetailImage.png";
import IconStar from "../../assets/Icons/Iconstar.png";
import Person from "../../assets/Icons/personal.png";
import Captain from "../../assets/Icons/captionImage.png";
import tickImage from "../../assets/Icons/tick.png";
import boatImage from "../../assets/Profile/boat.png";
import awardImage from "../../assets/Icons/Iconaward.png";
import avatar from "../../assets/Profile/user.png";
import fullTickImage from "../../assets/Icons/fulltick.png";
import shipRoundImage from "../../assets/Icons/shipround.png";

import DocModal from "../../components/Boats/DocModal";
import { Loading } from "../../components";

import { cancelback } from "../../utils/Constant";
import {
  getAccessories,
  getAllBoatBrands,
  getAllBoatTypes,
  getAllowes,
} from "../../features/basic/basicAction";
import { getUser } from "../../features/user/userAction";
import { setCurhost, setLoading } from "../../features/global/globalSlice";
import { getSimilar, getboatInfo } from "../../features/boats/boatsAction";

const Detail = () => {
  const carouselRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const curboat = useSelector((state) => state.globalState.curboat);
  const curhost = useSelector((state) => state.globalState.curhost);
  const curuser = useSelector((state) => state.userState.curuser);
  const loading = useSelector((state) => state.globalState.loading);

  const accessories = useSelector((state) => state.basicState.accessories);
  const boatTypes = useSelector((state) => state.basicState.boattypes);
  const boatBrands = useSelector((state) => state.basicState.boatbrands);
  const allowes = useSelector((state) => state.basicState.allowes);

  const [captain, setCaptain] = useState(
    curboat.plans?.some((plan) => plan.captain === 1)
  );
  const [curreview, setCurReview] = useState(0);
  const [cursimilar, setCurSimilar] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [expandedPlan, setExpandedPlan] = useState(null);
  const [plan, setPlan] = useState(null);
  const [allowed, setAllowed] = useState([]);
  const [unallowed, setUnallowed] = useState([]);
  const [similar, setSimilar] = useState([]);

  const visibleAccessories = accessories;
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const togglePlanDetails = (id) => {
    setExpandedPlan(expandedPlan === id ? null : id);
    setPlan(id);
  };

  const nextSlide = (flag) => {
    if (flag == "review")
      setCurReview((prevIndex) => (prevIndex + 1) % curboat.reviews.length);
    else
      setCurSimilar(
        (prevIndex) => (prevIndex - 1 + similar.length) % similar.length
      );
  };

  const prevSlide = (flag) => {
    if (flag == "review") {
      setCurReview(
        (prevIndex) => (prevIndex - 1 + similar.length) % curboat.length
      );
    }
    if (flag == "similar") {
      setCurSimilar(
        (prevIndex) => (prevIndex - 1 + similar.length) % similar.length
      );
    }
  };

  const goEdit = async () => {
    let result = await dispatch(getboatInfo(curboat._id));
    result = await dispatch(getUser(curhost._id));
    await dispatch(setCurhost(result));
    navigate("/home/boat/option");
  };

  useEffect(() => {
    if (curboat?._id === undefined) {
      navigate("/home/boat");
    }
    const fectbasicdata = async () => {
      await dispatch(setLoading(true));
      let result = await dispatch(getAccessories());
      result = await dispatch(getAllBoatTypes());
      result = await dispatch(getAllBoatBrands());
      result = await dispatch(getAllowes());
      result = await dispatch(getSimilar(curboat.location1, curboat._id));
      setSimilar(result);
      if (allowes.length > 0) {
        const allowedItems = allowes.filter((item) =>
          curboat.allowes.includes(item._id)
        );
        const unallowedItems = allowes.filter(
          (item) => !curboat.allowes.includes(item._id)
        );
        setAllowed(allowedItems);
        setUnallowed(unallowedItems);
      }
      await dispatch(setLoading(false));
    };
    fectbasicdata();
  }, [curboat, navigate]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div style={styles.container} className="flex flex-row gap-5">
          <Link to="/home/boat">
            <svg
              style={styles.backIcon}
              viewBox="0 0 512 512"
              className="mt-2 hover:fill-slate-500 active:fill-slate-600"
            >
              <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"></path>
            </svg>
          </Link>
          <div className="flex flex-col w-5/6">
            <div className="flex flex-row gap-5 justify-center">
              <div
                className="flex flex-row justify-center gap-2 items-center bg-blue-950 hover:bg-blue-900 text-center active:bg-gray-600 "
                style={styles.btn}
                onClick={() => {
                  openModal();
                }}
              >
                <span>Boat Documentatio</span>
                <div className="badge bg-red-600 badge-xs mt-1"></div>
              </div>
              <div
                style={styles.btn}
                onClick={() => {
                  goEdit();
                }}
                className="text-center bg-sky-600 hover:bg-sky-550 active:bg-gray-600 "
              >
                Edit Boat
              </div>
            </div>
            <div
              className="relative  mt-5 flex justify-center  bg-cover m-auto"
              style={{
                ...styles.topImage,
                backgroundImage: `url(${curboat.boatImage?.cover})`, // Ensure correct format
              }}
            >
              <div
                className="absolute bottom-3 left-3"
                style={styles.topImage.review}
              >
                1/10
              </div>
              <div
                style={styles.topImage.Circle}
                className="cursor-pointer absolute  top-3 right-3"
              >
                <svg style={styles.topImage.Icon} viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
            </div>
            <div className="flex  flex-col gap-1 mt-4 w-1/2 m-auto">
              <span style={styles.intro.location}>{curboat.location1} </span>
              <span style={styles.intro.detail}>{curboat.description}</span>
              <div
                style={styles.intro.review}
                className="flex flex-row gap-2 px-2 py-1 w-1/3 justify-around items-center mt-2"
              >
                <img src={IconStar} alt="" />
                <span style={styles.intro.review.score}>
                  {curhost.review}/5
                </span>
                <span style={styles.intro.review.booking}>
                  ({curhost.booking} bookings)
                </span>
              </div>
            </div>
            <div
              className="flex flex-col mt-4 w-1/2 m-auto gap-5"
              style={styles.cancel}
            >
              <div className="flex flex-row items-center">
                <div className="flex flex-col gap-2 w-1/2 items-center">
                  <div className="flex flex-col gap-2">
                    <div
                      style={{
                        ...styles.cancel.circle,
                        backgroundColor: "#2a8500",
                      }}
                    >
                      <span>{curhost.resrate}%</span>
                    </div>
                    <span>Response Rate</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-1/2 items-center">
                  <div className="flex flex-col gap-2">
                    <div
                      style={{
                        ...styles.cancel.circle,
                        backgroundColor:
                          cancelback[curboat.cancellation]?.color,
                      }}
                    >
                      <span>{cancelback[curboat.cancellation]?.text}</span>
                    </div>
                    <span>Cancellation Policy</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center ">
                <div className="flex flex-col items-center w-1/2">
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      src={Person}
                      alt=""
                      style={{ width: 20, height: 20 }}
                    />
                    <span>Up to {curboat.capacity} persons</span>
                  </div>
                </div>
                <div className="flex flex-col items-center w-1/2">
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      src={Captain}
                      alt=""
                      style={{ width: 20, height: 20 }}
                    />
                    <span>{captain ? "With Captain" : "WithOut Captain"}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
              <span style={styles.intro.detail}>Description</span>
              <span style={styles.des}>{curboat.description}</span>
            </div>
            <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
              <span style={styles.intro.detail}>Accessories</span>
              {visibleAccessories?.map((item, index) => {
                return curboat.accessories.includes(item._id) ? (
                  <div className="flex flex-row justify-between" key={index}>
                    <span style={styles.accessories}>{item.title}</span>
                    <img src={tickImage} alt="" />
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
            <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
              <span style={styles.intro.detail}>Specifications</span>
              <div className="flex flex-row justify-between">
                <span style={styles.accessories}>Year</span>
                <span style={styles.accessories.bold}>{curboat.year}</span>
              </div>
              <div className="flex flex-row justify-between">
                <span style={styles.accessories}>Feets</span>
                <span style={styles.accessories.bold}>{curboat.size}</span>
              </div>
              <div className="flex flex-row justify-between">
                <span style={styles.accessories}>Brand</span>
                <span style={styles.accessories.bold}>
                  {
                    boatBrands.find((item) => item._id === curboat.boatbrand)
                      ?.name
                  }
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span style={styles.accessories}>Type</span>
                <span style={styles.accessories.bold}>
                  {
                    boatTypes.find((item) => item._id === curboat.boattype)
                      ?.name
                  }
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span style={styles.accessories}>Model</span>
                <span style={styles.accessories.bold}>{curboat.model}</span>
              </div>
              <div className="flex flex-row justify-between">
                <span style={styles.accessories}>Capacity</span>
                <span style={styles.accessories.bold}>{curboat.capacity}</span>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
              <span style={styles.intro.detail}>Plans to choose from</span>
              <div style={styles.plan} className="flex flex-col gap-3">
                {curboat.plans?.map((item, index) => {
                  const isExpanded = expandedPlan === item._id;

                  return (
                    <div
                      style={isExpanded ? styles.open : styles.close}
                      onClick={() => togglePlanDetails(item._id)}
                      key={index}
                    >
                      <div
                        className="flex flex-row justify-between"
                        style={{ alignItems: "center" }}
                      >
                        <span style={styles.head}>Plan {index + 1}</span>
                        <div className="flex flex-row items-center">
                          <span style={styles.price}>${item.price}</span>
                          <img
                            src={fullTickImage}
                            style={{ transform: "rotate(180deg)" }}
                            alt=""
                          />
                        </div>
                      </div>
                      {isExpanded && (
                        <>
                          <span style={styles.description} className="mt-5">
                            {item.description}
                          </span>
                          {item.captain == 1 && (
                            <div
                              style={styles.row}
                              className="flex flex-row items-center mt-3"
                            >
                              <img src={shipRoundImage} />
                              <span style={styles.driver}>Con Capitan</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {curboat.reviews?.length > 0 && (
              <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
                <span style={styles.intro.detail}>Review</span>
                <div className="flex justify-center items-center">
                  <div className="relative flex items-center justify-center w-full">
                    <div className="absolute -left-12 z-10">
                      <svg
                        style={styles.Icon}
                        viewBox="0 0 512 512"
                        onClick={prevSlide("review")}
                      >
                        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"></path>
                      </svg>
                    </div>
                    <div
                      ref={carouselRef}
                      className="flex overflow-hidden w-full"
                    >
                      <div
                        className="flex transition-transform duration-500 gap-5"
                        style={{ transform: `translateX(-${curreview * 20}%)` }}
                      >
                        {curboat.reviews?.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-row justify-around gap-2 items-center"
                            style={{ ...styles.review.card, width: "250px" }}
                          >
                            <img
                              src={item.customer?.avatar}
                              alt=""
                              style={{ width: "63px", height: "55px" }}
                            />
                            <div className="flex flex-col justify-center">
                              <div
                                style={styles.intro.review}
                                className="flex flex-row gap-1 px-2 py-1  justify-around items-center mt-2"
                              >
                                <img src={IconStar} alt="" />
                                <span style={styles.intro.review.score}>
                                  {item.review}/5
                                </span>
                              </div>
                              <span
                                className="text-center"
                                style={styles.review.card.name}
                              >
                                {item.customer?.firstName +
                                  " " +
                                  item.customer?.lastName}
                              </span>
                              <span style={styles.review.card.name}>
                                {item.date}
                              </span>
                            </div>
                            <span>{index + 1}/227</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -right-10 z-10">
                      <svg
                        style={styles.Icon}
                        viewBox="0 0 512 512"
                        onClick={nextSlide("review")}
                      >
                        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col mt-5 w-1/2 m-auto gap-3">
              <span style={styles.intro.detail}>Host</span>
              <div style={styles.plan.card}>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    {curhost.review > 4.5 && (
                      <div className="flex flex-col gap-2  items-center">
                        <div className="flex flex-col gap-2">
                          <div
                            style={styles.host.badge}
                            className="px-1 gap-2 items-center flex flex-row py-1"
                          >
                            <img src={awardImage} alt="" />
                            <span style={styles.intro.review.score}>
                              ANFITRIÓN TOP
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col gap-2 items-center">
                      <div
                        style={styles.intro.review}
                        className="flex flex-row gap-1 px-1 py-1 text-center"
                      >
                        <img src={IconStar} alt="" />
                        <span style={styles.intro.review.score}>
                          {curhost.review}/5
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    src={curhost.avatar ? curhost.avatar : avatar}
                    alt=""
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <div
                  className="mt-2 flex flex-row justify-center py-3 cursor-pointer"
                  style={styles.host.message}
                >
                  <span>Send Message</span>
                </div>
                <div className="flex flex-row justify-between mt-5">
                  <span style={styles.accessories}>Average response time</span>
                  <span style={styles.accessories.bold}>{`<24 hours`}</span>
                </div>
                <div className="flex flex-row justify-between mt-5 items-center">
                  <span style={styles.accessories}>Response rate</span>
                  <div
                    style={{
                      ...styles.cancel.circle,
                      backgroundColor: "#2a8500",
                    }}
                  >
                    <span>{curhost.resrate}%</span>
                  </div>
                </div>
                <div className="mt-5 flex flex-row justify-center py-3 ">
                  <span className="cursor-pointer hover:text-black">
                    View Profile
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
              <span style={styles.intro.detail}>Details</span>
              <span style={styles.detail.title}>Allowed on the boat:</span>
              {allowed?.map((item, index) => {
                return (
                  <div className="flex flex-row justify-between" key={index}>
                    <span style={styles.accessories}>{item.title}</span>
                    <img src={tickImage} alt="" />
                  </div>
                );
              })}

              <span style={styles.detail.title}>Unallowed on the boat:</span>
              {unallowed?.map((item, index) => {
                return (
                  <div className="flex flex-row justify-between" key={index}>
                    <span style={styles.accessories}>{item.title}</span>
                    <img src={tickImage} alt="" />
                  </div>
                );
              })}
            </div>
            {similar.length > 0 && (
              <div className="flex flex-col mt-4 w-1/2 m-auto gap-3 mb-5">
                <span style={styles.intro.detail}>Similar boats</span>
                <div className="flex justify-center items-center">
                  <div className="relative flex items-center justify-center w-full">
                    <div className="absolute -left-12 z-10">
                      <svg
                        style={styles.Icon}
                        viewBox="0 0 512 512"
                        onClick={prevSlide("similar")}
                      >
                        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"></path>
                      </svg>
                    </div>
                    <div
                      ref={carouselRef}
                      className="flex overflow-hidden w-full"
                    >
                      <div
                        className="flex transition-transform duration-500 gap-5"
                        style={{
                          transform: `translateX(-${cursimilar * 20}%)`,
                        }}
                      >
                        {similar.map((item, index) => (
                          <div
                            style={{
                              paddingTop: "20px",
                              width: "112px",
                              borderRadius: "12px",
                              textAlign: "center",
                            }}
                            key={index}
                          >
                            <img
                              src={item.coverImage}
                              alt={descontent}
                              style={{
                                width: "90px",
                                height: "90px",
                                borderRadius: "10px",
                                objectFit: "cover",
                              }}
                            />
                            <p style={styles.model}>{item.model}</p>
                            <p style={styles.price}>${item.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -right-10 z-10">
                      <svg
                        style={styles.Icon}
                        viewBox="0 0 512 512"
                        onClick={nextSlide("similar")}
                      >
                        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <DocModal
            isOpen={isModalOpen}
            onClose={closeModal}
            status={curboat.status}
            boatId={curboat._id}
          />
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    padding: "15px",
  },
  btn: {
    cursor: "pointer",
    padding: "10px 18px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
    width: "15%",
  },
  backIcon: {
    cursor: "pointer",
    color: "#17233c",
    fontSize: "25px",
    top: "136px",
    left: "342px",
    width: "25px",
    height: "25px",
  },
  open: {
    backgroundColor: "#f0f1ff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ecedf0",
    padding: 10,
    marginBottom: 10,
    maringTop: 10,
  },
  close: {
    marginBottom: 10,
    maringTop: 10,
    padding: 10,
  },
  topImage: {
    width: "50%",
    height: "350px",
    review: {
      cursor: "pointer",
      padding: "2px 10px",
      border: "0",
      boxSizing: "border-box",
      borderRadius: "22px",
      backgroundColor: "#55565f",
      color: "#ffffff",
      fontSize: "9px",
      fontFamily: "Lato",
      fontWeight: 600,
      lineHeight: "13px",
      outline: "none",
    },
    Circle: {
      width: "25px",
      height: "25px",
      backgroundColor: "#17233c",
      borderRadius: "50%",
    },
    Icon: {
      margin: "auto",
      color: "#ffffff",
      fill: "#ffffff",
      fontSize: "18px",
      top: "239px",
      left: "950px",
      width: "18px",
      height: "25px",
    },
  },
  intro: {
    location: {
      color: "#8e9697",
      fontSize: "14px",
      fontFamily: "Roboto",
      fontWeight: 700,
      lineHeight: "18px",
    },
    detail: {
      color: "#102a5e",
      fontSize: "18px",
      fontFamily: "Lexend Deca",
      fontWeight: 700,
      lineHeight: "23px",
    },
    review: {
      backgroundColor: "#072d4c",
      borderRadius: "9.120000000000001px",
      border: "1px solid #ffffff",
      boxSizing: "border-box",
      score: {
        color: "#ffffff",
        fontSize: "12px",
        fontFamily: "Lexend Deca",
        fontWeight: "500",
        lineHeight: "16px",
      },
      booking: {
        color: "#8e9697",
        fontSize: "12px",
        fontFamily: "Lexend Deca",
        fontWeight: 700,
        lineHeight: "18px",
      },
    },
  },
  cancel: {
    padding: "30px 20px",
    backgroundColor: "#fefffe",
    borderRadius: "10px",
    border: "1px solid #c0c0c0",
    boxSizing: "border-box",
    circle: {
      padding: "1px 15px",
      boxSizing: "border-box",
      borderRadius: "12px",
      color: "#ffffff",
      fontSize: "10px",
      fontFamily: "Lexend Deca",
      fontWeight: 700,
      lineHeight: "18px",
      textAlign: "center",
      outline: "none",
    },
  },
  des: {
    color: "#102a5e",
    fontSize: "15px",
    fontFamily: "Lexend Deca",
    lineHeight: "22px",
  },
  accessories: {
    color: "#17233c",
    fontSize: "15px",
    fontFamily: "Lexend Deca",
    fontWeight: 300,
    lineHeight: "20px",
    bold: {
      color: "#101c2c",
      fontSize: "15px",
      fontFamily: "Lexend Deca",
      fontWeight: "500",
      lineHeight: "20px",
    },
  },
  plan: {
    padding: "10px 10px",
    backgroundColor: "#fefffe",
    borderRadius: "10px",
    border: "1px solid #bec0e3",
    boxSizing: "border-box",
    card: {
      padding: "10px 20px",
      backgroundColor: "#f0f1ff",
      borderRadius: "10px",
      border: "1px solid #ecedf0",
      boxSizing: "border-box",
      price: {
        color: "#0751c1",
        fontSize: "14px",
        fontFamily: "Lexend Deca",
        fontWeight: "500",
        lineHeight: "18px",
      },
      paln: {
        color: "#17233c",
        fontSize: "16px",
        fontFamily: "Lexend Deca",
        fontWeight: "500",
        lineHeight: "22px",
      },
      des: {
        color: "#000000",
        fontSize: "12px",
        fontFamily: "Lexend Deca",
        lineHeight: "16px",
      },
      captain: {
        color: "#004eff",
        fontSize: "12px",
        fontFamily: "Lexend Deca",
        fontWeight: 700,
        lineHeight: "16px",
      },
    },
  },
  review: {
    card: {
      backgroundColor: "#fefffe",
      borderRadius: "10px",
      border: "1px solid #ecedf0",
      boxSizing: "border-box",
      name: {
        color: "#0a252f",
        fontSize: "15px",
        fontFamily: "Lexend Deca",
        fontWeight: 700,
        lineHeight: "20px",
      },
      date: {
        color: "#0a252f",
        fontSize: "12px",
        fontFamily: "Lexend Deca",
        lineHeight: "20px",
      },
    },
  },
  host: {
    badge: {
      backgroundColor: "#f4bf64",
      borderRadius: "10px",
      text: {
        color: "#154353",
        fontSize: "15px",
        fontFamily: "Lato",
        fontWeight: 800,
        lineHeight: "9px",
      },
    },
    message: {
      border: "1px solid #0751c1",
      boxSizing: "border-box",
      borderRadius: "11px",
      backgroundColor: "#fefffe",
      color: "#0751c1",
      fontSize: "18px",
      fontFamily: "Lexend Deca",
      fontWeight: 600,
      lineHeight: "23px",
      outline: "none",
    },
  },
  detail: {
    title: {
      color: "#17233c",
      fontSize: "16px",
      fontFamily: "Lexend Deca",
      fontWeight: 700,
      lineHeight: "23px",
    },
  },
  Icon: {
    color: "#0751c1",
    fill: "#0751c1",
    fontSize: "44px",
    top: "1719px",
    left: "965px",
    width: "44px",
    height: "25px",
  },
  description: {
    color: "#000000",
    fontSize: 15,
    fontFamily: "Lexend Deca",
  },
  driver: {
    marginLeft: 4,
    color: "#004eff",
    fontSize: 14,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  head: {
    color: "#17233c",
    fontSize: 18,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  price: {
    color: "#0751c1",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    marginRight: 15,
  },
  model: {
    color: "#17233c",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: 300,
  },
};

export default Detail;
