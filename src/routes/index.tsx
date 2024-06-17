// Routes
import { Main } from '../components/main';
import { Airbnb } from '../components/airbnb';

// Third party imports
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export const UgeomRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Airbnb/>}/>
				<Route path='/cnpj' element={<Main/>}/>
			</Routes>
		</Router>
	)
}

UgeomRoutes.displayName="UgeomRoutes"