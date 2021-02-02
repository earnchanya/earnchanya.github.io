import { useEffect, useState } from 'react'

export default function useInitial() {
	const [state, setState] = useState<number>()

	useEffect(() => {
		setState(10)
	}, [])

	return { state, setState }
}
