import React, { useState, useEffect, useRef } from "react";
import "./PageThree.css";
import avatarali from "../../assets/avatar-ali.png";
import avataranisha from "../../assets/avatar-anisha.png";
import avatarshanai from "../../assets/avatar-shanai.png";
import avatarichard from "../../assets/avatar-richard.png";

function PageThree() {
    const [activeIndex, setActiveIndex] = useState(0); // Track active card index
    const cardContainerRef = useRef(null); // Reference to the card container

    // Handle scroll event to update active index
    useEffect(() => {
        const handleScroll = () => {
            if (cardContainerRef.current) {
                const scrollLeft = cardContainerRef.current.scrollLeft;
                const cardWidth = cardContainerRef.current.clientWidth;
                const newIndex = Math.round(scrollLeft / cardWidth);
                console.log("Scroll Left:", scrollLeft, "Card Width:", cardWidth, "Active Index:", newIndex); // Debugging
                setActiveIndex(newIndex);
            }
        };

        const container = cardContainerRef.current;
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to a specific card
    const scrollToCard = (index) => {
        if (cardContainerRef.current) {
            const cardWidth = cardContainerRef.current.clientWidth;
            cardContainerRef.current.scrollTo({
                left: cardWidth * index,
                behavior: "smooth", // Smooth scrolling
            });
        }
    };

    return (
        <div className="pagethree">
            <h1>What they&apos;ve said</h1>

            <div className="card-container" ref={cardContainerRef}>
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

            {/* Indicators */}
            <div className="indicators">
                {[0, 1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className={`indicator ${activeIndex === index ? "active" : ""}`}
                        onClick={() => scrollToCard(index)}
                    ></div>
                ))}
            </div>

            <button className="btn pagethreebtn">Get Started</button>
        </div>
    );
}

export default PageThree;