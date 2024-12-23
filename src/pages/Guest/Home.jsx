import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormInput, Checkbox, Loading } from "../../components";
import DetailModal from "../../components/Guest/DetailModal";

import { Paymethods, BookingStatus } from "../../utils/Constant";
import { getAllBookings } from "../../features/bookings/bookingAction";
import { setLoading } from "../../features/global/globalSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const loading = useSelector((state) => state.globalState.loading);

  const [data, setData] = useState([]);
  const [selectbooking, setSelectBooking] = useState({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fectbookings = async () => {
      await dispatch(setLoading(true));
      let result = await dispatch(getAllBookings());
      if (result?.errors) {
        for (let key in result.errors) {
          if (result.errors.hasOwnProperty(key)) {
            toast.error(`${result.errors[key]}`);
          }
        }
      } else {
        result = result.filter((item, index) => item.status == 2);
        await setData(result);
      }
      await dispatch(setLoading(false));
    };
    fectbookings();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full flex flex-col gap-3" style={styles.container}>
          <div className="w-full flex flex-row gap-4  items-center justify-between">
            <div className="flex flex-row items-center gap-4 w-1/3">
              <FormInput />
              <div
                style={{ ...styles.btn, backgroundColor: "#17233c" }}
                className="text-center"
              >
                Search
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Checkbox />
              <span>Show Due only</span>
            </div>
          </div>

          <div style={styles.card}>
            <table className="w-full table-auto text-center">
              <thead>
                <tr
                  className=" text-white"
                  style={{ backgroundColor: "#04004d" }}
                >
                  <th className="px-4 py-2">Guest Name</th>
                  <th className="px-4 py-2">Payment Method</th>
                  <th className="px-4 py-2">Total Amount</th>
                  <th className="px-4 py-2">Boat Name</th>
                  <th className="px-4 py-2">Booking Date</th>
                  <th className="px-4 py-2">BookingID</th>
                  <th className="px-4 py-2">Confirmation Number</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      setSelectBooking(item);
                      openModal();
                    }}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } border-b cursor-pointer hover:bg-slate-200`}
                  >
                    <td className="px-4 py-2">{item.guestName || "-"}</td>
                    <td className="px-4 py-2">{Paymethods[item.paymethod]}</td>
                    <td className="px-4 py-2">{item.price}</td>
                    <td className="px-4 py-2">{item.boatName}</td>
                    <td className="px-4 py-2">
                      {`${new Date(item.date).getUTCFullYear()}-${String(
                        new Date(item.date).getUTCMonth() + 1
                      ).padStart(2, "0")}-${String(
                        new Date(item.date).getUTCDate()
                      ).padStart(2, "0")}`}
                    </td>
                    <td className="px-4 py-2">{item._id}</td>
                    <td className="px-4 py-2">{item.confirmID || "-"}</td>
                    <td className="px-4 py-2">
                      <div
                        style={{
                          ...styles.status,
                          backgroundColor: BookingStatus[item.status].color,
                        }}
                      >
                        {BookingStatus[item.status].title}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DetailModal
            isOpen={isModalOpen}
            onClose={closeModal}
            data={selectbooking}
          />
        </div>
      )}
    </>
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
    color: "#17233c",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  },
  item: {
    color: "#17233c",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
  },
  status: {
    boxSizing: "border-box",
    borderRadius: "100000px",
    backgroundColor: "#ef4444",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "no  ne",
  },
  Icon: {
    fontSize: "21px",
    width: "21px",
    height: "21px",
    color: "#ffffff",
    fill: "#ffffff",
  },
};
export default Home;
