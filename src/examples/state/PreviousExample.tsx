import { useState } from 'react'
import { usePrevious } from '../../hooks/state/usePrevious.ts'

export function PreviousExample() {
	const [count, setCount] = useState(0)
	const prevCount = usePrevious(count)

	return (
		<div>
			<p>Current: {count}</p>
			<p>Previous: {prevCount}</p>
			<button onClick={() => setCount(c => c + 1)}>Increment</button>
		</div>
	)
}
