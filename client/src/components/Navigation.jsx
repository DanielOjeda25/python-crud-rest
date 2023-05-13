import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<Link to={"/tasks"}>
				<h1>task App</h1>
			</Link>
			<Link to={"/tasks-create"}>Crear Tareas</Link>
		</div>
	);
};

export default Navigation;
