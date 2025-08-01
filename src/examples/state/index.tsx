import { type FC } from 'react'

import { PreviousExample } from './PreviousExample.tsx'
import { DebounceExample } from './DebounceExample.tsx'
import { ThrottleExample } from './ThrottleExample.tsx'
import { ToggleExample } from './ToggleExample.tsx'
import { TimeoutExample } from './TimeoutExample.tsx'
import { IntervalExample } from './IntervalExample.tsx'
import { UpdateEffectExample } from './UpdateEffectExample.tsx'

export const StateHooksExamples: FC = () => {
	return (
		<div className='examples-wrapper'>
			<h3 className='section-title'>
				Работа с состоянием, таймерами, эффектами
			</h3>
			<div className='cards-list'>
				<div className='card'>
					<h3>usePrevious</h3>
					<PreviousExample />
				</div>

				<div className='card'>
					<h3>useDebounce</h3>
					<DebounceExample />
				</div>

				<div className='card'>
					<h3>useThrottle</h3>
					<ThrottleExample />
				</div>

				<div className='card'>
					<h3>useToggle</h3>
					<ToggleExample />
				</div>

				<div className='card'>
					<h3>useTimeout</h3>
					<TimeoutExample />
				</div>

				<div className='card'>
					<h3>useInterval</h3>
					<IntervalExample />
				</div>

				<div className='card'>
					<h3>useUpdateEffect</h3>
					<UpdateEffectExample />
				</div>
			</div>
		</div>
	)
}
