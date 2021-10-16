import React from 'react';
import Store from './components/Store';
import { GlobalContextProvider } from './context/GlobalState';
import './App.css';

function App() {
	return (
		<GlobalContextProvider>
			<div className='App'>
				<Store />
			</div>
		</GlobalContextProvider>
	);
}

export default App;
