import "./PageTwo.css";
const PageTwo = () => {
  return (
    <div className="pagetwo">
      <div className="sub">
        <h1>What's different about Manage? </h1>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="sub-section">
        <div className="sub-one">
          <h2>
            <span className="num">01</span>Track company-wide progress{" "}
          </h2>
          <p>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>

        <div className="sub-two">
          <h2>
            <span>02</span>Advanced built-in reports{" "}
          </h2>
          <p>
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="sub-three">
          <h2>
            <span>03</span>Everything you need in one place{" "}
          </h2>
          <p>
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
