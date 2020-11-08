import React from "react";
import Layout from "../../components/Layout/Layout";

const About = () => {
	return (
		<Layout>
			<div className="container-fluid container-min-max-width">
                <h2>This is a personal project meant to prove React knowledge</h2>
                <br></br>
                <p>The project uses Hooks, Redux, Firebase for login, and many other React basics</p>
                <br></br>
                <p>The info on products is from a json file called products.json, stored in the project files</p>
                <br></br>
                <p>Every component has been written with reusability in mind</p>
                <br></br>
                <p>Just use the links in the footer to find out more about the project author:)</p>
                <br></br>
                <p>Hope you enjoy and appreciate the effort, and thank you for visiting:)</p>
            </div>
		</Layout>
	);
};

export default About;
