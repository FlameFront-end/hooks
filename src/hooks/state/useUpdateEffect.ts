import { useEffect, useRef, type DependencyList } from 'react'

export function useUpdateEffect(effect: () => void, deps: DependencyList) {
	const firstRender = useRef(true)

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false
			return
		}
		return effect()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps)
}
