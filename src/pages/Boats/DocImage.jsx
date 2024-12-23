import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Loading } from "../../components";

import { uploadDocImage } from "../../features/boats/boatsAction";
import { setLoading } from "../../features/global/globalSlice";
import boatImage from "../../assets/Profile/boat.png";
import photoImage from "../../assets/Icons/photo.png";

const DocImage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const curboat = useSelector((state) => state.globalState.curboat);
  const loading = useSelector((state) => state.globalState.loading);

  const [image, setImage] = useState(
    curboat.docImage
      ? curboat.docImage
      : {
          navigation: null,
          authorization: null,
        }
  );

  const handleImageUpload = (event, name) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage((prevState) => ({
          ...prevState,
          [name]: reader.result,
        }));
        uploadImage(file, name);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file, type) => {
    dispatch(setLoading(true));
    const formData = new FormData();
    formData.append("photo", file);
    const result = await dispatch(uploadDocImage(curboat._id, formData, type));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    if (curboat?._id === undefined) {
      navigate("/home/boat");
    }
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div style={styles.container} className="flex flex-row gap-5">
          <Link to="/home/boat/option">
            <svg
              style={styles.backIcon}
              viewBox="0 0 512 512"
              className="mt-2 hover:fill-slate-500 active:fill-slate-600"
            >
              <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"></path>
            </svg>
          </Link>
          <div className="flex flex-col w-5/6">
            <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
              <div
                style={styles.card}
                className="w-full px-10 py-10 flex flex-col gap-4"
              >
                <span style={styles.title}>Add documentation</span>
                <span style={styles.des}>
                  We need to verify for the safety of you and your customers
                  that you are the owner or authorized owner of the boat.
                </span>
                <span style={styles.des}>
                  Please add images of your boat documents. Make sure the images
                  are of good quality and legible.
                </span>
                {["navigation", "authorization"].map((photoKey) => (
                  <div
                    key={photoKey}
                    style={styles.imgcard}
                    className="flex flex-col m-auto mt-2"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      name={photoKey}
                      onChange={(e) => handleImageUpload(e, photoKey)}
                      style={{ display: "none" }}
                      id={`image-upload-${photoKey}`}
                    />
                    <label
                      htmlFor={`image-upload-${photoKey}`}
                      className="cursor-pointer flex"
                      style={{ width: "100%", height: "100%" }}
                    >
                      {image[photoKey] ? (
                        <img
                          src={image[photoKey]}
                          alt={`Uploaded ${photoKey}`}
                          style={{ width: "100%", height: "100%" }}
                        />
                      ) : (
                        <div className="flex flex-col w-1/4 m-auto justify-center items-center cursor-pointer">
                          <img
                            src="default-image-url.jpg"
                            alt="Default"
                            style={{ width: "45px", height: "38px" }}
                          />
                          <span>{photoKey}</span>
                        </div>
                      )}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "15px",
  },
  card: {
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
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
  title: {
    color: "#17233c",
    fontSize: "20px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "26px",
  },
  des: {
    color: "#000000",
    fontSize: "12px",
    fontFamily: "Lexend Deca",
    lineHeight: "16px",
  },
  imgcard: {
    width: "100%",
    height: "250px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 2px 10px rgba(3,3,3,0.1)",
  },
  btn: {
    padding: "10px 10px",
    boxSizing: "border-box",
    borderRadius: "6px",
    backgroundColor: "#072d4c",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "none",
  },
};
export default DocImage;
