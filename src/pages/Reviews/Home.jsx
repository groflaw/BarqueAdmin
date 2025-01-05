import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormInput, Rating } from "../../components";
import EditReview from "../../components/Reviews/EditReview";
import { setLoading } from "../../features/global/globalSlice";

import {
  getAllReviews,
  deleteHostReview,
} from "../../features/boats/boatsAction";

const Home = () => {
  const dispatch = useDispatch();
  const [reviewdetail, setReviewDetail] = useState(false);
  const [boats, setBoats] = useState([]);
  const [data, setData] = useState({
    userName: "",
    model: "",
    content: "",
    review: "",
    boatId: null,
    reviewId: null,
  });
  const openPayModal = () => setReviewDetail(true);
  const closePayModal = () => setReviewDetail(false);

  useEffect(() => {
    const fetchreviews = async () => {
      await dispatch(setLoading(true));
      let result = await dispatch(getAllReviews());
      setBoats(result);
      await dispatch(setLoading(false));
    };
    fetchreviews();
  }, []);

  const handleDelete = async (boatId, reviewId) => {
    let result = await dispatch(deleteHostReview(boatId, reviewId));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    } else {
      const updateBoats = boats.map((boat) => {
        if (boat._id === boatId) {
          return {
            ...boat,
            reviews: boat.reviews.filter((review) => review._id !== reviewId),
          };
        }
        return boat;
      });
      setBoats(updateBoats);
      toast.success("Delete Review Successfully");
    }
  };
  return (
    <div className="w-full flex flex-col gap-3" style={styles.container}>
      <div className="w-full flex flex-row gap-4  items-center justify-end">
        <div className="flex flex-row items-center gap-4 w-1/3">
          <FormInput />
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c" }}
            className="text-center"
          >
            Search
          </div>
        </div>
      </div>

      <div style={styles.card} className="px-3 py-5 flex flex-col gap-2">
        <span style={styles.title}>Host Reviews</span>
        <table className="w-full table-auto text-center">
          <thead>
            <tr className=" text-white" style={{ backgroundColor: "#04004d" }}>
              <th className="px-4 py-2">BoatName</th>
              <th className="px-4 py-2">Reviewer Name</th>
              <th className="px-4 py-2">Review</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Review Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {boats.map((row, rowIndex) => {
              return row.reviews?.map((item, reviewIndex) => {
                return (
                  <tr
                    key={`${row._id}-${item._id}`} // Unique key for each row
                    className={`${
                      reviewIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } border-b cursor-pointer hover:bg-slate-200`}
                  >
                    <td className="px-4 py-2">{row.model}</td>
                    <td className="px-4 py-2">
                      {item.customer.firstName + " " + item.customer.lastName}
                    </td>
                    <td className="px-4 py-2">{item.content}</td>
                    <td className="px-4 py-2">
                      <div className="flex flex-row justify-center">
                        <Rating value={item.review} />
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex flex-row gap-2">
                        <div
                          style={{ ...styles.btn, backgroundColor: "#17233c" }}
                          onClick={() => {
                            setData({
                              userName:
                                item.customer.firstName +
                                " " +
                                item.customer.lastName,
                              model: row.model,
                              content: item.content,
                              review: item.review,
                              boatId: row._id,
                              reviewId: item._id,
                            });
                            openPayModal();
                          }}
                        >
                          Edit
                        </div>
                        <div
                          style={{ ...styles.btn, backgroundColor: "#d9534f" }}
                          onClick={() => {
                            handleDelete(row._id, item._id);
                          }}
                        >
                          Delete
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
      <EditReview
        isOpen={reviewdetail}
        onClose={closePayModal}
        data={data}
        setData={setData}
        setBoats={setBoats}
      />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px 20px",
  },
  btn: {
    cursor: "pointer",
    padding: "10px 10px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
  },
  title: {
    color: "#030303",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  },
};
export default Home;
