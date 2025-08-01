import { useState } from 'react'
import { useLockBodyScroll } from '../../hooks/dom/useLockBodyScroll.ts'

export function LockBodyScrollExample() {
	const [modalOpen, setModalOpen] = useState(false)

	useLockBodyScroll(modalOpen)

	return (
		<>
			<button onClick={() => setModalOpen(true)}>Открыть модалку</button>

			{modalOpen && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0,0,0,0.5)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
					onClick={() => setModalOpen(false)}
				>
					<div
						style={{ background: 'white', padding: 20 }}
						onClick={e => e.stopPropagation()}
					>
						Модальное окно. Прокрутка страницы заблокирована.
						<br />
						<button onClick={() => setModalOpen(false)}>
							Закрыть
						</button>
					</div>
				</div>
			)}
		</>
	)
}
