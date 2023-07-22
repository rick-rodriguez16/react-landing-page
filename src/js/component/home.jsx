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
			<div className="container-fluid mt-5">
				<JumbotronContainer />
				<CardContainer />
			</div>
			<Footer />
		</>
	);
};

export default Home;
