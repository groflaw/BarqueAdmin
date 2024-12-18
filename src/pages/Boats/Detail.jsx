import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import DetailImg from "../../assets/Background/DetailImage.png";
import IconStar from "../../assets/Icons/Iconstar.png";
import Person from "../../assets/Icons/personal.png";
import Captain from "../../assets/Icons/captionImage.png";
import tickImage from "../../assets/Icons/tick.png";
import shipround from "../../assets/Icons/shipround.png";
import boatImage from "../../assets/Profile/boat.png";
import awardImage from "../../assets/Icons/Iconaward.png";
import avatar from "../../assets/Profile/user.png";

import DocModal from "../../components/Boats/DocModal";

const Detail = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const reviews = [
    {
      name: "Yacht",
      review: 4.8,
      date: "2024-12-10",
    },
    {
      name: "Yacht",
      review: 5,
      date: "2024-12-10",
    },
    {
      name: "Yacht",
      review: 2.8,
      date: "2024-12-10",
    },
    {
      name: "Yacht",
      review: 3.8,
      date: "2024-12-10",
    },
  ];
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };
  return (
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
            className="bg-blue-950 hover:bg-blue-900 text-center active:bg-gray-600 "
            style={styles.btn}
            onClick={() => {
              openModal();
            }}
          >
            Boat Documentation
          </div>
          <div
            style={styles.btn}
            className="text-center bg-sky-600 hover:bg-sky-550 active:bg-gray-600 "
          >
            <Link to="/home/boat/option">Edit Boat</Link>
          </div>
        </div>
        <div
          className="relative  mt-5 flex justify-center  bg-cover m-auto"
          style={{ ...styles.topImage, backgroundImage: `url(${DetailImg})` }}
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
          <span style={styles.intro.location}>LECHERIA, ANZ </span>
          <span style={styles.intro.detail}>
            29ft DOUBLE DECK TRITOON WITH UPPER DECK SUNBED AND WATERSLIDE
          </span>
          <div
            style={styles.intro.review}
            className="flex flex-row gap-2 px-2 py-1 w-1/3 justify-around items-center mt-2"
          >
            <img src={IconStar} alt="" />
            <span style={styles.intro.review.score}>4.8/5</span>
            <span style={styles.intro.review.booking}>(227 bookings)</span>
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
                  <span>100%</span>
                </div>
                <span>Response Rate</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-1/2 items-center">
              <div className="flex flex-col gap-2">
                <div
                  style={{
                    ...styles.cancel.circle,
                    backgroundColor: "#f4bf64",
                  }}
                >
                  <span>100%</span>
                </div>
                <span>Cancellation Policy</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <div className="flex flex-col items-center w-1/2">
              <div className="flex flex-col gap-2 items-center">
                <img src={Person} alt="" style={{ width: 20, height: 20 }} />
                <span>Up to 12 persons</span>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <div className="flex flex-col gap-2 items-center">
                <img src={Captain} alt="" style={{ width: 20, height: 20 }} />
                <span>With Captain</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
          <span style={styles.intro.detail}>Description</span>
          <span style={styles.des}>
            WE HAVE 3 DOUBLE DECK TRITOONS , MESSAGE US INCASE THE TIME FRAME
            YOU WANT IS BOOKED . !!!!! PLEASE MESSAGE BEFORE INSTANT BOOKING.
          </span>
        </div>
        <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
          <span style={styles.intro.detail}>Accessories</span>
          <div className="flex flex-row justify-between">
            <span style={styles.accessories}>Anchor</span>
            <img src={tickImage} alt="" />
          </div>
        </div>
        <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
          <span style={styles.intro.detail}>Specifications</span>
          <div className="flex flex-row justify-between">
            <span style={styles.accessories}>Anchor</span>
            <span style={styles.accessories.bold}>2018</span>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
          <span style={styles.intro.detail}>Plans to choose from</span>
          <div style={styles.plan} className="flex flex-col gap-3">
            <div style={styles.plan.card} className="flex flex-col gap-3">
              <div className="flex flex-row justify-between">
                <span style={styles.plan.card.paln}>Plan 1</span>
                <div className="flex flex-row justify-around items-center gap-7">
                  <span style={styles.plan.card.price}>$292</span>
                  <svg style={styles.Icon} viewBox="0 0 512 512">
                    <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 310.6c-12.5 12.5-32.75 12.5-45.25 0L256 221.3L166.6 310.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C239.6 147.1 247.8 144 256 144s16.38 3.125 22.62 9.375l112 112C403.1 277.9 403.1 298.1 390.6 310.6z"></path>
                  </svg>
                </div>
              </div>
              <span style={styles.plan.card.des}>
                Viajes a playa el faro, puinare y saco. Incluye hielo y agua.
              </span>
              <div className="flex flex-row justify-start">
                <img src={shipround} alt="" />
                <span style={styles.plan.card.captain}>Con Capitan</span>
              </div>
            </div>
            <div
              className="flex flex-row justify-between"
              style={{ padding: "10px 20px" }}
            >
              <span style={styles.plan.card.paln}>Plan 1</span>
              <div className="flex flex-row justify-around items-center gap-7">
                <span style={styles.plan.card.price}>$292</span>
                <svg style={styles.Icon} viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 246.6l-112 112C272.4 364.9 264.2 368 256 368s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S403.1 234.1 390.6 246.6z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
          <span style={styles.intro.detail}>Review</span>
          <div className="flex justify-center items-center">
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute -left-12 z-10">
                <svg
                  style={styles.Icon}
                  viewBox="0 0 512 512"
                  onClick={prevSlide}
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"></path>
                </svg>
              </div>
              <div ref={carouselRef} className="flex overflow-hidden w-full">
                <div
                  className="flex transition-transform duration-500 gap-5"
                  style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                >
                  {reviews.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-around gap-2 items-center"
                      style={{ ...styles.review.card, width: "250px" }}
                    >
                      <img
                        src={avatar}
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
                          {item.name}
                        </span>
                        <span style={styles.review.card.name}>{item.date}</span>
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
                  onClick={nextSlide}
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 w-1/2 m-auto gap-3">
          <span style={styles.intro.detail}>Host</span>
          <div style={styles.plan.card}>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2 items-center">
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
                <div className="flex flex-col gap-2 items-center">
                  <div
                    style={styles.intro.review}
                    className="flex flex-row gap-1 px-1 py-1 text-center"
                  >
                    <img src={IconStar} alt="" />
                    <span style={styles.intro.review.score}>4.8/5</span>
                  </div>
                </div>
              </div>
              <img
                src={boatImage}
                alt=""
                style={{ width: "70px", height: "50px" }}
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
                <span>100%</span>
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
          <div className="flex flex-row justify-between">
            <span style={styles.accessories}>Anchor</span>
            <img src={tickImage} alt="" />
          </div>
          <span style={styles.detail.title}>Allowed on the boat:</span>
          <div className="flex flex-row justify-between">
            <span style={styles.accessories}>Anchor</span>
            <img src={tickImage} alt="" />
          </div>
        </div>
        <div className="flex flex-col mt-4 w-1/2 m-auto gap-3 mb-5">
          <span style={styles.intro.detail}>Similar boats</span>
          <div className="flex justify-center items-center">
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute -left-12 z-10">
                <svg
                  style={styles.Icon}
                  viewBox="0 0 512 512"
                  onClick={prevSlide}
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"></path>
                </svg>
              </div>
              <div ref={carouselRef} className="flex overflow-hidden w-full">
                <div
                  className="flex transition-transform duration-500 gap-5"
                  style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                >
                  {reviews.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-around gap-2 items-center"
                      style={{ ...styles.review.card, width: "250px" }}
                    >
                      <img
                        src={avatar}
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
                          {item.name}
                        </span>
                        <span style={styles.review.card.name}>{item.date}</span>
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
                  onClick={nextSlide}
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DocModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
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
      fontSize: "11px",
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
};

export default Detail;
