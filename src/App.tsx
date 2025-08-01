import './App.css'

import { StateHooksExamples } from './examples/state'
import { DomHooksExamples } from './examples/dom'

function App() {
	return (
		<div className='app'>
			<h1 className='app-title'>Полезные хуки для React</h1>

			<StateHooksExamples />

			<DomHooksExamples />
		</div>
	)
}

export default App
