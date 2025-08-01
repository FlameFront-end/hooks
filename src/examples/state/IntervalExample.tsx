import { useState } from 'react'
import { useInterval } from '../../hooks/state/useInterval.ts'

export function IntervalExample() {
	const [count, setCount] = useState(0)
	useInterval(() => setCount(c => c + 1), 1000)

	return <p>Count: {count}</p>
}
