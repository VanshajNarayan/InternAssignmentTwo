import { useData } from "../ContextFolder/ContextApi";
import "./ThirdDraft.css";

function ThirdDraft() {
  const data = useData();
  return (
    <>
      <section className="job_details">
        <h3>Job Details</h3>
        <div className="titleAndDetail">
          <div className="title">
            <p className="titlePara">Title</p>
            <p className="dataTitle"> {data.title ? data.title : "..."} </p>
          </div>
          <div className="details">
            <p className="detailsPara">Details</p>
            <p className="dataDetails"> {data.details ? data.details : "..."} </p>
          </div>
        </div>
        <div className="location">
            <p className="locationPara">Details</p>
            <p className="dataLocation"> {data.location ? data.location : "..."} </p>
          </div>
      </section>
    </>
  )
};

export default ThirdDraft;