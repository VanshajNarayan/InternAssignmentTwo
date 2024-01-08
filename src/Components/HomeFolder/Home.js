import { useState } from "react";
import Navbar from "../NavbarFolder/Navbar";
import Requisition from "../RequisitionFolder/Requisition";
import "./Home.css";
import Job from "../JobDetailFolder/Job";
import Interview from "../InterviewSettingFolder/Interview";
import FirstDraft from "../FirstDraftFolder/FirstDraft";
import SecondDraft from "../SecondDraft/SecondDraft";
import ThirdDraft from "../ThirdDraft/ThirdDraft";
import FourthDraft from "../FourthFolder/FourthDraft";
import DraftandPreview from "../DraftandPreview/DraftandPreview";
import { useData, useDispatch } from "../ContextFolder/ContextApi";

function Home() {
  const [option, setoption] = useState("requisition");
  const data = useData();
  const dispatch = useDispatch();
  const {requisitionTitle, NumberOfOpening, gender, urgency, title, details, location, mode, duration, lang } = data;
  function handleNext() {
    if (option === "requisition" && requisitionTitle !== "" && NumberOfOpening !== "" && gender !== "" && urgency !== "") {
      setoption("job");
    } else if (option === "job" && title !== "" && details !== "" && location !== "" ) {
      setoption("interview");
    };

    if (option === "interview" && mode !== "" && duration !== "" && lang !== "" ) {
      alert("Form Successfully submitted");
      dispatch({ type: "EmptyInput" });
    };
  };
  function handlePrevious() {
    if (option === "job") {
      setoption("requisition");
    } else if (option === "interview") {
      setoption("job");
    };
  };
  return (
    <>
      <section className="home_Section">
        <div className="headingDiv">
          <h2 className="heading">Create Candidate Requisition </h2>
        </div>
        <Navbar option = {option} />
        <hr className="hr"/>
        <section className="pageContainer">
          <div className="formPart">
            {option === "requisition" && <Requisition />}
            {option === "job" && <Job />}
            {option === "interview"  && <Interview />}
          </div>
          <div className="draftPart">
            <DraftandPreview/>
            <FirstDraft/>
            <SecondDraft/>
            <ThirdDraft/>
            <FourthDraft/>
          </div>
        </section>
        <div className="buttons_div">
          {
            option !== "requisition" && (<button className="prevBtn" onClick={handlePrevious} >Previous</button>)
          }
          <button className="nextBtn" onClick={handleNext}> {option === "interview" ? "Submit" : "Next"} </button>
        </div>
      </section>
    </>
  )
};

export default Home;