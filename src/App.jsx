import React, { useState } from "react";
import { Button } from "react-bootstrap";
import dummyLog from "./dummy/log.json";
import AbilityIcon from "./AbilityIcon";
import isRelevantGcd from "./helper/gcd";

function App() {
	var [lineList, setLineList] = useState([]);

	function loadLog() {
		let data = dummyLog.data.reportData.report.events.data;
		var lines = [];
		var dummyCasts = [];
		data.forEach((event) => {
			if (event.type === "cast" && event.sourceID === 1) {
				if (event.abilityGameID === 154 && dummyCasts.length > 0) {
					// New line
					lines.push(dummyCasts);
					dummyCasts = [];
				}
				dummyCasts.push(event);
			}
		});
		setLineList(lines);
	}

	return (
		<div className="App">
			<p>
				FFLogs link: <input></input>
				<br />
				<Button onClick={() => loadLog()}>Load</Button>
			</p>
			<table>
				<tbody>
					{lineList.map((line, index) => {
						return (
							<tr>
								<td>100%</td>
								<td>N0</td>
								<td>
									{line.map((cast, index) => {
										if (isRelevantGcd(cast.abilityGameID)) {
											return (
												<AbilityIcon
													id={cast.abilityGameID}
													key={index}
												/>
											);
										}
										return null;
									})}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default App;
