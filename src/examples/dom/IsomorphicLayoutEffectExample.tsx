import { useIsomorphicLayoutEffect } from '../../hooks/dom/useIsomorphicLayoutEffect.ts'

export function IsomorphicLayoutEffectExample() {
	useIsomorphicLayoutEffect(() => {
		// Этот эффект выполнится синхронно на клиенте, и как useEffect на сервере (без предупреждений)
		console.log('useIsomorphicLayoutEffect сработал')
	}, [])

	return (
		<>
			<div>
				Этот эффект выполнится синхронно на клиенте, и как useEffect на
				сервере (без предупреждений) (смотри логи)
			</div>
		</>
	)
}
