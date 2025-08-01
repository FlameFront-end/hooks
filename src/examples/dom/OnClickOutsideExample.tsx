import { useRef, useState } from 'react'
import { useOnClickOutside } from '../../hooks/dom/useOnClickOutside.ts'

export function OnClickOutsideExample() {
	const ref = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState(false)

	useOnClickOutside(ref, () => setOpen(false))

	return (
		<div ref={ref}>
			<button onClick={() => setOpen(v => !v)}>
				{open ? 'Закрыть' : 'Открыть'} меню
			</button>
			{open && (
				<div style={{ marginTop: 10 }}>
					Меню открыто, клик вне закроет
				</div>
			)}
		</div>
	)
}
