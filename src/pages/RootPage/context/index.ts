import { createContext, useContext } from 'react'

interface StoreProps {
	item: Record<string, string>
}

const StoreContext = createContext<StoreProps>(null)

export const useStore = () => useContext(StoreContext)

export default StoreContext
