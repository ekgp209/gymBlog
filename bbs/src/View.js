import React from "react";
// import Header from "./component/Hearder";
import Board from "./component/Board";
import RouteLink from "./routes/RouteLink";
import "./View.css";

function Post() {
    return (
        <>
            <div id="Header" className="header">
                <div>
                    <h1>Our Gym</h1>
                </div>
            </div>
            <div className="container">
                <div id="sidebar" className="sidebar">
                    <Board />
                </div>
                <div id="content" className="content">
                    <RouteLink />
                </div>
            </div>
        </>
    );
}

export default Post;
