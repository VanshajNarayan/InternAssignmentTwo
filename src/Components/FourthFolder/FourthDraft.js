import { useData } from "../ContextFolder/ContextApi";
import "./FourthDraft.css";

function FourthDraft() {
  const data = useData();
  return (
    <>
      <section className="interview_Setting">
        <h3>Interview Settings</h3>
        <div className="durationAndLang">
          <div className="duration">
            <p className="durationPara">Interview Duration</p>
            <p className="durationTitle"> {data.duration ? data.duration : "..."} </p>
          </div>
          <div className="lang">
            <p className="LangPara">Interview Language</p>
            <p className="dataLang"> {data.lang ? data.lang : "..."} </p>
          </div>
        </div>
        <div className="mode">
            <p className="modePara">Interview Mode</p>
            <p className="datamode"> {data.mode ? data.mode : "..."} </p>
          </div>
      </section>
    </>
  )
};

export default FourthDraft;