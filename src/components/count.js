import React from "react";
import { useState } from "react";

function Count() {
	const [counter, setCounter] = useState(0);
	const [name, setName] = useState("Rubina");

	return (
		<div style={{ marginLeft: "390px" }}>
			<p className="text-center "> count is {counter}</p>
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}>
				increase
			</button>
			<p>{name}</p>

			<button
				onClick={() => {
					setName("RubiNaveed");
				}}>
				change Name
			</button>
		</div>
	);
}

export default Count;
