import { type FC } from 'react'

import { OnClickOutsideExample } from './OnClickOutsideExample'
import { LockBodyScrollExample } from './LockBodyScrollExample'
import { ElementSizeExample } from './ElementSizeExample'
import { IsomorphicLayoutEffectExample } from './IsomorphicLayoutEffectExample'

export const DomHooksExamples: FC = () => {
	return (
		<div className='examples-wrapper'>
			<h3 className='section-title'>
				Работа с DOM, кликами, размерами и пр.
			</h3>
			<div className='cards-list'>
				<div className='card'>
					<h4>useOnClickOutside</h4>
					<OnClickOutsideExample />
				</div>

				<div className='card'>
					<h4>useLockBodyScroll</h4>
					<LockBodyScrollExample />
				</div>

				<div className='card'>
					<h4>useElementSize</h4>
					<ElementSizeExample />
				</div>

				<div className='card'>
					<h4>useIsomorphicLayoutEffect</h4>
					<IsomorphicLayoutEffectExample />
				</div>
			</div>
		</div>
	)
}
