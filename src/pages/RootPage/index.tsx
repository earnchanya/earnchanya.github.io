import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'pages/HomePage'
import GlobalStyles from 'common/styles/globalStyles'
import Navbar from './components/Navbar'
import StoreContext from './context'

const VALUE = {
	item: { value: '10' },
}

const RootPage = () => {
	return (
		<StoreContext.Provider value={VALUE}>
			<Navbar />
			<GlobalStyles />
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</StoreContext.Provider>
	)
}

export default RootPage
