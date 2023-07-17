import React from "react";
import Navbar from "./Navbar";
import JumbotronContainer from "./JumbotronContainer";
import CardContainer from "./CardContainer";
import Footer from "./Footer";



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
			<Footer />
		</>
	);
};

export default Home;
