import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';


function App() {
	return (
		<div>
			<Header />
			<MainBody imgurl="assets/i1.png" />
			<MainBody imgurl="assets/i2.png" />
			<MainBody imgurl="assets/i3.png" />
			<MainBody imgurl="assets/i4.png" />
			<Footer />
		</div>
	);
}

export default App;
