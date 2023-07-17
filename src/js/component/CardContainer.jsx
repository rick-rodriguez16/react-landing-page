import React from "react";
import Card from "./Card";

const CardContainer = () => {
    return (
        <>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 mx-auto">
                    <div className="row">
                        <div className="col">
                            <Card />
                        </div>
                        <div className="col">
                            <Card />
                        </div>	
                        <div className="col">
                            <Card />
                        </div>	
                        <div className="col">
                            <Card />
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
		    </div>
		</>
    );
}

export default CardContainer;