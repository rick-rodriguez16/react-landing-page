import React from "react";
import JumbotronContainer from "./JumbotronContainer";
import CardContainer from "./CardContainer";



//create your first component
const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row mt-5">
					<JumbotronContainer />
				</div>
				<div className="row">
					<CardContainer />
				</div>
			</div>
		</>
	);
};

export default Home;
