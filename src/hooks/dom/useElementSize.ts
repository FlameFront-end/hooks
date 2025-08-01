import { useState, useLayoutEffect, type RefObject } from 'react'

interface Size {
	width: number
	height: number
}

export function useElementSize<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T | null>
): Size {
	const [size, setSize] = useState<Size>({ width: 0, height: 0 })

	useLayoutEffect(() => {
		if (!ref.current) return

		const element = ref.current

		function updateSize() {
			setSize({
				width: element.offsetWidth,
				height: element.offsetHeight
			})
		}

		updateSize()

		const resizeObserver = new ResizeObserver(() => {
			updateSize()
		})

		resizeObserver.observe(element)

		return () => {
			resizeObserver.disconnect()
		}
	}, [ref])

	return size
}
