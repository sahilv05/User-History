import React from 'react';

function MainBody() {
	const name = 'sahil';
	const surname = 'verma';
	return (
		<div>
			<div>
				<p>hello {name + ' ' + surname}</p>
				<br />
				<p>hello again {`${name} ${surname}`}</p>
			</div>
			<br />
			<hr />
			<input type="checkbox" />
			<p>This is placeholder</p>
			<input type="checkbox" />
			<p>This is placeholder</p>
			<input type="checkbox" />
			<p>This is placeholder</p>
			<input type="checkbox" />
			<p>This is placeholder</p>
			<input type="checkbox" />
			<p>This is placeholder</p>
		</div>
	);
}

export default MainBody;
