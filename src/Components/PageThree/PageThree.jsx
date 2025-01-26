import "./PageThree.css";
import avatarali from "../../assets/avatar-ali.png";
import avataranisha from "../../assets/avatar-anisha.png";
import avatarshanai from "../../assets/avatar-shanai.png";
import avatarichard from "../../assets/avatar-richard.png";

function PageThree() {
  return (
    <div className="pagethree">
      <h1>What they&apos;ve Said</h1>

      <div className="card">
        <div className="card-one">
          <img src={avatarali} alt="avatar" />
          <h3>Ali Bravo</h3>
          <p>
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
        <div className="card-two">
          <img src={avatarichard} alt="avatar" />
          <h3>Richard Watts</h3>
          <p>
           
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!”
          </p>
        </div>
        <div className="card-three">
          <img src={avatarshanai} alt="avatar" />
          <h3>Shanai Gough</h3>
          <p>
            
            “Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive.”
          </p>
        </div>
        <div className="card-four">
          <img src={avataranisha} alt="avatar" />
          <h3>Anisha Li</h3>
          <p>
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageThree;
