import { useToggle } from '../../hooks/state/useToggle.ts'

export function ToggleExample() {
	const [on, toggle, setOn] = useToggle()

	return (
		<div>
			<p>Status: {on ? 'ON' : 'OFF'}</p>
			<div className='row'>
				<button onClick={toggle}>Toggle</button>
				<button onClick={() => setOn(false)}>set off</button>
			</div>
		</div>
	)
}
