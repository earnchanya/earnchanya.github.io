import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react'

interface ItemProps {
	name: string
	value?: number
}

interface Props {
	item?: ItemProps
	children: ReactNode
}

const Block = ({ item, children }: Props) => {
	const [value, setValue] = useState('0')

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)
	}

	return (
		<div>
			<input value={value} onChange={onChange} />
			{item.value}
			{children}
		</div>
	)
}

export default Block
