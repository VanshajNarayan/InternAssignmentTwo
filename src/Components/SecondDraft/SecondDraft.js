import { useData } from "../ContextFolder/ContextApi";
import "./SecondDraft.css";

function SecondDraft() {
  const data = useData();
  return (
    <>
      <section className="reuisition_details">
        <h3>Requisition Details</h3>
        <div className="box">
          <div className="urgency">
            <p className="urgencyPara">Urgency</p>
            <p className="dataUrgency"> {data.urgency ? data.urgency : "..."} </p>
          </div>
          <div className="gender">
            <p className="genderPara">gender</p>
            <p className="dataGender"> {data.gender ? data.gender : "..."} </p>
          </div>
        </div>
      </section>
    </>
  )
};

export default SecondDraft;