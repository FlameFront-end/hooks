import { useRef } from 'react'
import { useElementSize } from '../../hooks/dom/useElementSize.ts'

export function ElementSizeExample() {
	const ref = useRef<HTMLDivElement>(null)
	const { width, height } = useElementSize(ref)

	return (
		<>
			<div
				ref={ref}
				style={{
					resize: 'both',
					overflow: 'auto',
					padding: 20,
					border: '1px solid #ccc',
					width: 200,
					height: 100,
					marginBottom: 10
				}}
			>
				Изменяй размер блока
			</div>
			<div>Ширина: {width}px</div>
			<div>Высота: {height}px</div>
		</>
	)
}
