import { useState } from "react";
import "./Requisition.css";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "../ContextFolder/ContextApi";

function Requisition() {
  const [hideShow, setHideShow] = useState(false);
  const [secondhideShow, setSecondHideShow] = useState(false);
  const [optionGender, setOptionGender] = useState('');
  const [optionUrgency, setOptionUrgency] = useState('');
  const [requisitionValue, setRequisitionValue] = useState("");
  const [openingsNumber, setOpeningsNumber] = useState("");
  const gender = ["Male", "Female", "Non Binary"];
  const urgency = ["Urgent", "Immediate joining", "Relaxed"];
  const dispatch = useDispatch();
  return (
    <>
      <form action="">
        <label>Requisition Title</label>
        <input
          type="text"
          value={requisitionValue}
          autoCapitalize="off"
          placeholder="Enter requisition title"
          onChange={(e) => {
            setRequisitionValue(e.target.value);
            dispatch({ type: "RequisitionTitle", requisitionValue: requisitionValue });
          }}
        />
        { requisitionValue === "" && <p>Requisition title is required</p>}

        <label>Number of openings</label>
        <input type="text" value={openingsNumber} autoCapitalize="off" placeholder="0" onChange={(e) => {
          setOpeningsNumber(e.target.value);
          dispatch({ type: "OpeningNumber", openingsNumber: openingsNumber });
        }} />
        { openingsNumber === "" && <p>Enter a valid number</p>}

        <label>Gender</label>
        <div className="gender" onClick={() => setHideShow(!hideShow)}>
          <input
            type="text"
            value={optionGender}
            autoCapitalize="off"
            placeholder="select gender"
            className="genderInput"
            onChange={(e) => dispatch({ type: "SetGender", genderOption: e.target.value }) }
          />
          <IoIosArrowDown className="genderSelection" />
          <div className="line"></div>
          <div className="options">
            <ul type="none">
              {hideShow &&
                gender.map((data, index) => {
                  return (
                    <li key={index} onClick={() => {
                      setOptionGender(data);
                    }}>
                      {data}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        {optionGender === "" && <p>Gender is required</p>}

        <label>Urgency</label>
        <div
          className="urgency"
          onClick={() => setSecondHideShow(!secondhideShow)}>
          <input
            type="text"
            value={optionUrgency}
            autoCapitalize="off"
            placeholder="select urgency"
            onChange={(e) => dispatch({type : "setUrgency", optionUrgency : e.target.value})}
          />
          <IoIosArrowDown className="urgencySelection" />
          <div className="secondLine"></div>
          <div className="options">
            <ul type="none">
              {secondhideShow &&
                urgency.map((data, index) => (
                  <li key={index} onClick={() => {
                    setOptionUrgency(data);
                  }}>
                    {data}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {optionUrgency === "" && <p>Urgency is required</p>}
      </form>
    </>
  );
}

export default Requisition;
