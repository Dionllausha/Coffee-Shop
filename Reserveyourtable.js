import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimeField } from "react-aria-components";
import "./Reserveyourtable.css";

function ReserveYourTable() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("oneperson");
  const [reserved, setReserved] = useState(false);
  const [reservationDetails, setReservationDetails] = useState({});

  const handleBookTable = () => {
    setReservationDetails({
      people: people,
      date: date.toLocaleDateString(),
      time: time,
    });

    setReserved(true);

    setTimeout(() => {
      setReserved(false);
    }, 5000);
  };

  return (
    <div
      className="Reserveyourtable"
      style={{
        border: "1px solid black",
        width: "100vw",
        height: "50vh",
        backgroundColor: "#f5deb3",
        position: "relative",
        bottom: "83.7em",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "ANTON",
        }}
      >
        RESERVE YOUR TABLE
      </h1>

      {reserved ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Montserrat",
            fontSize: "1.15em",
            color: "#1d1d1b",
            height: "100%",
            position:'relative',
            bottom:'40px'
          }}
        >
          <p>You have successfully reserved a table!</p>
          <p>Details:</p>
          <p>Number of People: {reservationDetails.people}</p>
          <p>Date: {reservationDetails.date}</p>
          <p>Time: {reservationDetails.time}</p>
        </div>
      ) : (
        <div>
          <select
            className="selectionofppl"
            name="selectedamountofPeople"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          >
            <option value="One person">1 Person</option>
            <option value="Two people">2 People</option>
            <option value="Three people">3 People</option>
            <option value="Four people">4 People</option>
            <option value="Five people">5 People</option>
            <option value="Six people">6 People</option>
            <option value="Seven people">7 People</option>
            <option value="Eight people">8 People</option>
            <option value="Nine people">9 People</option>
            <option value="Ten people">10 People</option>
          </select>

          <div>
            <DatePicker
              className="DateSelection"
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>

          <TimeField >
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              style={{
                fontSize: "1.2em",
                padding: "5px",
               borderTop:'none',
               borderLeft:'none',
               borderRight:'none',
               fontfamily:'Montserrat',
               width:'18vw',
               height:'4vh',
               position:'relative',
                bottom:"2px" 


              }}
            />
          </TimeField>

          <button
            style={{
              backgroundColor: "#1d1d1b",
              color: "white",
              border: "1px solid white",
              height: "8vh",
              width: "8vw",
              fontSize: "1.25em",
              fontFamily: "monospace",
              borderBottomLeftRadius: "20px",
              borderStartEndRadius: "20px",
              cursor: "pointer",
              position: "relative",
              left: "46rem",
            }}
            onClick={handleBookTable}
          >
            BOOK A TABLE
          </button>
        </div>
      )}
    </div>
  );
}

export default ReserveYourTable;
