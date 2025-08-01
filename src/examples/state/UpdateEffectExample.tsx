import { useState } from 'react'
import { useUpdateEffect } from '../../hooks/state/useUpdateEffect.ts'

export function UpdateEffectExample() {
	const [count, setCount] = useState(0)

	useUpdateEffect(() => {
		console.log('Updated:', count)
	}, [count])

	return (
		<div>
			<p>Смотреть в логи</p>

			<button onClick={() => setCount(c => c + 1)}>Increment</button>
		</div>
	)
}
