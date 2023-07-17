import React from "react";
import Jumbotron from "./Jumbotron";

const JumbotronContainer = () => {
    return (
        <>
            <div className="col-2"></div>
			<div className="col-8"><Jumbotron /></div>
			<div className="col-2"></div>
        </>
    )
}

export default JumbotronContainer;