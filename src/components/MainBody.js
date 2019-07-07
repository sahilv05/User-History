import React from 'react';

function MainBody() {
	const name = 'sahil';
	const surname = 'verma';
	return (
		<div>
			<div>
				<p>
					<center>
						<b>Hello {name + ' ' + surname}</b>
					</center>
				</p>
			</div>
			<br />
			<hr />
			<input type="checkbox" />
			<p>Choose to start</p>
		</div>
	);
}

export default MainBody;
