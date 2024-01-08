import { useState } from "react";
import "./Job.css";
import { useDispatch } from "../ContextFolder/ContextApi";

function Job() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <form action="">
        <label>Job Title</label>
        <input
          type="text"
          value={title}
          autoCapitalize="off"
          placeholder="Enter job title"
          onChange={(e) => {
            setTitle(e.target.value);
            dispatch({ type: "setJobTitle", title: title });
          }}
        />
        {title === "" && <p>Job Title is required</p>}

        <label>Job Details</label>
        <input type="text" value={details} autoCapitalize="off" placeholder="Enter job details" onChange={(e) => {
          setDetails(e.target.value);
          dispatch({ type: "setJobDetails", details: details });
        }} />
        {details === "" && <p>Job Details is required</p>}

        <label>Job Location</label>
        <input type="text" value={location} autoCapitalize="off" placeholder="Enter job location" onChange={(e) => {
          setLocation(e.target.value);
          dispatch({ type: "setJobLocation", location: location });
        }} />
        {location === "" && <p>Job Location is required</p>}

      </form>
    </>
  );
}

export default Job;
