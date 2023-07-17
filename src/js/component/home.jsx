import React from "react";
import Navbar from "./Navbar";
import JumbotronContainer from "./JumbotronContainer";
import CardContainer from "./CardContainer";



//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
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
