import { useState, type RefObject, useEffect } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect.ts'

interface Size {
	width: number
	height: number
}

// оптимизирован для Next.js (SSR) при помощи useIsomorphicLayoutEffect
export function useElementSize<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T | null>
): Size {
	const [size, setSize] = useState<Size>({ width: 0, height: 0 })

	useIsomorphicLayoutEffect(() => {
		if (!ref.current) return

		const element = ref.current

		const resizeObserver = new ResizeObserver(([entry]) => {
			if (entry && entry.contentRect) {
				const { width, height } = entry.contentRect
				setSize({ width, height })
			}
		})

		resizeObserver.observe(element)

		return () => {
			resizeObserver.disconnect()
		}
	}, [ref])

	return size
}

// только для React. Не подойдёт для Next.js (SSR)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function useElementSizeReact<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T | null>
): Size {
	const [size, setSize] = useState<Size>({ width: 0, height: 0 })

	useEffect(() => {
		if (!ref.current) return

		const element = ref.current

		const resizeObserver = new ResizeObserver(([entry]) => {
			if (entry && entry.contentRect) {
				const { width, height } = entry.contentRect
				setSize({ width, height })
			}
		})

		resizeObserver.observe(element)

		return () => {
			resizeObserver.disconnect()
		}
	}, [ref])

	return size
}
