import React from "react";
import { Button } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<p>
				FFLogs link: <input></input>
				<br />
				<Button>Load</Button>
			</p>
			<table>
				<tr>
					<div id="line-1">
						<p>
							<td>
								<Button>+</Button>
							</td>
							<td>100%</td>
							<td>N0</td>
							<td>B3 B4 PD F3 F4 F4 F4 PD F4 F4 F4 DSP</td>
						</p>
					</div>
				</tr>
			</table>
		</div>
	);
}

export default App;
