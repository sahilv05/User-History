import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import StateTest from './components/StateTest'
import ConditionalRenderComponent from './components/ConditionalRenderComponent'
import LoginTest from './components/LoginTest';
import FormTest from './components/FormTest'


function App() {
	return (
		<div>
			<Header />
			<ConditionalRenderComponent />
			<FormTest />
			<LoginTest />
			<StateTest />
			<Footer />
		</div>
	);
}

export default App;
