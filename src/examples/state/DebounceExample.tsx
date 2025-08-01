import { useState } from 'react'
import { useDebounce } from '../../hooks/state/useDebounce.ts'

export function DebounceExample() {
	const [search, setSearch] = useState('')
	const debounced = useDebounce(search, 500)

	return (
		<div>
			<input value={search} onChange={e => setSearch(e.target.value)} />
			<p>Debounced: {debounced}</p>
		</div>
	)
}
