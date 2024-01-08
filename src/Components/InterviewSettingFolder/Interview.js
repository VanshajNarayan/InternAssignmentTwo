import { useState } from "react";
import "./Interview.css";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "../ContextFolder/ContextApi";

function Interview() {
  const [hodeOne, setHideOne] = useState(false);
  const [hodeSec, setHideSec] = useState(false);
  const [hodeThr, setHideThr] = useState(false);
  const [optionMode, setOptionMode] = useState("");
  const [optionDuration, setOptionDuration] = useState("");
  const [optionLang, setOptionLang] = useState("");
  const mode = ["offline", "online"];
  const duration = ["Short", "Medium", "Long"];
  const language = ["English", "Hindi"];
  const dispatch = useDispatch();
  return (
    <>
      <form action="">
        <label>Interview Mode</label>
        <div className="interview" onClick={() => setHideOne(!hodeOne)}>
        <input
          type="text"
          value={optionMode}
          autoCapitalize="off"
          placeholder="select interview mode"
          onChange={(e) => dispatch({ type: "setInterviewMode", mode: e.target.value }) }
          />
          <IoIosArrowDown className="modeSelection"/>
          <div className="interviewLine"></div>
          <div className="options">
            <ul type="none">
              {hodeOne &&
                mode.map((data, index) => {
                  return (
                    <li key={index} onClick={() => {
                      setOptionMode(data);
                      
                    }}>
                      {data}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        { optionMode === "" && <p>Interview mode is required</p>}

        <label>Interview Duration</label>
        <div className="duration" onClick={() => setHideSec(!hodeSec)}>
        <input type="text" value={optionDuration} autoCapitalize="off" placeholder="select interview duration" onChange={(e) => dispatch({ type: "setInterviewDuration", duration: e.target.value })  } />
        <IoIosArrowDown className="modeSelection"/>
        <div className="durationLine"></div>
        <div className="options">
            <ul type="none">
              {hodeSec &&
                duration.map((data, index) => {
                  return (
                    <li key={index} onClick={() => {
                      setOptionDuration(data);
                      
                    }}>
                      {data}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        { optionDuration === "" && <p>Interview duration is required</p>}

        <label>Interview Language</label>
        <div className="language" onClick={() => setHideThr(!hodeThr)}>
        <input type="text" value={optionLang} autoCapitalize="off" placeholder="select interview language" onChange={(e) => dispatch({ type: "setJobLanguage", lang: e.target.value }) } />
        <IoIosArrowDown className="modeSelection"/>
        <div className="languageLine"></div>
        <div className="options">
            <ul type="none">
              {hodeThr &&
                language.map((data, index) => {
                  return (
                    <li key={index} onClick={() => {
                      setOptionLang(data);
                    }}>
                      {data}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        { optionLang === "" && <p>Interview language is required</p>}


      </form>
    </>
  );
}

export default Interview;
