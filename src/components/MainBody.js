import React from 'react';

function MainBody(props) {
	console.log(props);

	return (
		<div>
			<img src={props.imgurl} height="200" width="200" />
			<h1>{props.name}</h1>
			<p><b>Phone No. </b>{props.number}</p>
		</div>
	);
}

export default MainBody;
