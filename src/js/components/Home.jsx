import React from "react";
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="d-flex align-items-center justify-content-center py-5 min-widht">
				<div className="row">
					<div className="col-3 col-md-6 col-sm-12">
						<Card/>
					</div>	
					<div className="col-3 col-md-6 col-sm-12">
						<Card/>
					</div>	
					<div className="col-3 col-md-6 col-sm-12">
						<Card/>
					</div>	
					<div className="col-3 col-md-6 col-sm-12">
						<Card/>
					</div>	
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;