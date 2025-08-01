import { useEffect, useLayoutEffect } from 'react'

// useLayoutEffect на клиенте, useEffect на сервере (чтобы избежать предупреждений SSR)
export const useIsomorphicLayoutEffect =
	typeof window !== 'undefined' ? useLayoutEffect : useEffect
