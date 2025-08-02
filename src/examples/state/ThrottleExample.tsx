import { useState } from 'react'
import { useThrottle } from '../../hooks/state/useThrottle.ts'

export function ThrottleExample() {
	const [val, setVal] = useState('')
	const throttled = useThrottle(val, 500)

	return (
		<div>
			<input value={val} onChange={e => setVal(e.target.value)} />
			<p>Throttled (500 ms): {throttled}</p>
		</div>
	)
}
