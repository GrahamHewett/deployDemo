import React from "react";

export default function Movie(props) {
	return (
		<figure className="movie">
		  <h1 className='overlay'>{props.title}</h1>
		  <img src={props.image} alt="matrix movie cover" />
		</figure>
	);
}
