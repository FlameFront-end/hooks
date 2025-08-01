import { useState } from 'react'
import { useTimeout } from '../../hooks/state/useTimeout.ts'

export function TimeoutExample() {
	const [message, setMessage] = useState('Wait for it...')
	useTimeout(() => setMessage('Hello after 3s!'), 3000)

	return <p>{message}</p>
}
