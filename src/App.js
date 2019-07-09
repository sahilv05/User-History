import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import i1 from './assets/i1';
import i2 from './assets/i2';
import i3 from './assets/i3';
import i4 from './assets/i4';

function App() {
	return (
		<div>
			<Header />
			<MainBody imgurl={i1} />
			<MainBody imgurl={i2} />
			<MainBody imgurl={i3} />
			<MainBody imgurl={i4} />
			<Footer />
		</div>
	);
}

export default App;
