import React, { useState } from "react";
import { response } from "./dataUtils";
import Seats from "./Seats";
import "../index.css";

export default function SeatingArea() {
  const [seatingData, setSeatingData] = useState(response.data);
  const seatClassLabel = () => {
    return seatingData.map((seatData, index) => (
      <div key={index} className='seatingData'>
        <p className='seatingData__classLabel'>
          {seatData.seatClassType}, Rs. {seatData.seatClassPrice}
        </p>
        <Seats rows={seatData.rows} />
      </div>
    ));
  };
  return <div className='wrapper'>{seatClassLabel()}</div>;
}
