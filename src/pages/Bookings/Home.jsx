import React,{useState} from "react";

import { FormInput } from "../../components";
import DetailModal from "../../components/Bookings/DetailModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const data = [
    {
      BookingID: "Eleanor Shellstrop",
      GuestName: "eleanor@barqua.com",
      HostName: "+1 234 567 890",
      BoatName: "123 Paradise St.",
      BookingDate: "March 14, 1985",
      Plan: "Phoenix",
      NPassengers: "USA",
      TAmount: "Jan 5, 2023, 10:00",
      Status: "Boat Owner",
     
    },
    {
      BookingID: "Jason Mendoza",
      GuestName: "jason@barqua.com",
      HostName: "+1 987 654 321",
      BoatName: "456 Sunset Blvd.",
      BookingDate: "April 1, 1990",
      Plan: "Miami",
      NPassengers: "USA",
      TAmount: "Feb 12, 2023, 13:45",
      Status: "Guest",
    
    },
    {
      BookingID: "Tahani Al-Jamil",
      GuestName: "tahani@barqua.com",
      HostName: "+44 20 7946 0958",
      BoatName: "789 Luxury Ave.",
      BookingDate: "June 6, 1987",
      Plan: "London",
      NPassengers: "UK",
      TAmount: "March 20, 2023, 15:15",
      Status: "Boat Owner",
     
    },
  ];
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-col gap-3" style={styles.container}>
      <div className="w-full flex flex-row gap-4 justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c" }}
            className="text-center"
          >
            Filter by Status
          </div>
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c" }}
            className="text-center"
          >
            Filter by Status
          </div>
        </div>{" "}
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

      <div style={styles.card}>
        <table className="w-full table-auto text-center">
          <thead>
            <tr className=" text-white" style={{ backgroundColor: "#04004d" }}>
              <th className="px-4 py-2">BookingID</th>
              <th className="px-4 py-2">GuestName</th>
              <th className="px-4 py-2">HostName</th>
              <th className="px-4 py-2">BoatName</th>
              <th className="px-4 py-2">BookingDate</th>
              <th className="px-4 py-2">Plan</th>
              <th className="px-4 py-2">NPassengers</th>
              <th className="px-4 py-2">TAmount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                onClick={() => {
                  openModal();
                }}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b cursor-pointer hover:bg-slate-200`}
              >
                <td className="px-4 py-2">{row.BookingID}</td>
                <td className="px-4 py-2 cursor-pointer">
                  <u>{row.GuestName}</u>
                </td>
                <td className="px-4 py-2">{row.HostName}</td>
                <td className="px-4 py-2">{row.BoatName}</td>
                <td className="px-4 py-2">{row.BookingDate}</td>
                <td className="px-4 py-2">{row.Plan}</td>
                <td className="px-4 py-2">{row.NPassengers}</td>
                <td className="px-4 py-2">{row.TAmount}</td>
                <td className="px-4 py-2"><div style={styles.status}>{row.Status}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DetailModal isOpen={isModalOpen} onClose={closeModal} />
      
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
  status:{
    boxSizing: 'border-box',
    borderRadius: '100000px',
    backgroundColor: '#ef4444',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '20px',
    outline: 'none',
  }
};
export default Home;
