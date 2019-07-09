import React from 'react';

function MainBody(props) {
	console.log(props);

	return (
		<div>
			<img src={props.imgurl} />
		</div>
	);
}

export default MainBody;
