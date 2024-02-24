import React from "react";
import disbalePerson from "../disablity.svg";
export default function Seats({ rows }) {
  console.log("rows", rows);

  const applyClassName = (availability) => {
    console.log("availability", availability);
    switch (availability) {
      case "available":
        return "available";
      case "notAvailable":
        return "notAvailable";

      case "booked":
        return "booked";
      case "blocked":
        return "blocked";
      case "personWithDisability":
        return "disability";

      default:
        return "seat-normal";
    }
  };

  return (
    <div>
      {rows.map((row, index) => {
        return (
          <div className='seatingData__classArea'>
            <p className='seatingData__classArea_rowLabel'>{row.rowValue}</p>
            <div className='seatingData__classArea_seats'>
              {row.seats.map((seat, index) => {
                return seat.seatValue ? (
                  <div
                    key={index}
                    className={`seatingData__classArea_currentSeat ${applyClassName(
                      seat.seatAvailability
                    )}`}>
                    {seat.seatValue}
                  </div>
                ) : (
                  <div
                    key={index}
                    className={`seatingData__classArea_currentSeat ${applyClassName(
                      seat.seatAvailability
                    )}`}></div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
