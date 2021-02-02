import { useStore } from 'pages/RootPage/context'
import React from 'react'
import Block from './components/Block'
import { Text, Container } from './styled'

const HomePage = () => {
	const item = {
		name: 'name',
		value: 10,
	}
	const store = useStore()

	return (
		<div>
			{/* <Text>{store.item['value']}</Text> */}
			{/* <Block item={item}>test</Block> */}
			<h1 id="profile">Profile</h1>
			<Container />
			<h1 id="exp">exp</h1>
		</div>
	)
}

export default HomePage
