import React from 'react'

function Movie({imageSrc, title}) {
	// console.log('the value of props is ', props)
	return (
		<figure className="movie">
			<h1>{title}</h1>	
          	<img src={imageSrc} alt={title} />
        </figure>
	); 
}

export default Movie