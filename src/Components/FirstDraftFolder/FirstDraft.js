import { useData } from "../ContextFolder/ContextApi";
import "./FirstDraft.css";

function FirstDraft() {
  const data = useData();
  return (
    <>
      <section className="firstDraft">
        <div className="requisition">
          <h3 className="requisition_head"> {data?.requisitionTitle} </h3>
          <h3 className="opening">Opening <span> {data?.NumberOfOpening} </span> </h3>
        </div>
      </section>
    </>
  )
};

export default FirstDraft;