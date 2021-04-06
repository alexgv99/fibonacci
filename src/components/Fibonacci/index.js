import React, { useState } from "react";

import './index.scss';

function Fibonacci({depth: depthProps}) {

	const [depth, setDepth] = useState(parseInt(depthProps, 10));
	
	const calculate = (depth) => {
		let p1 = 0;
		let p2 = 1;
		let fibo = [];
		for (let i = 0; i < depth; i++) {
			const newP = p1 + p2;
			fibo.push({p1, p2, newP});
			p1 = p2;
			p2 = newP;
		}
		return fibo;
	}

	const fibonacci = calculate(depth);

	const colors = ['red', 'green', 'blue'];

	return (
		<div className="container">
			<h1>Fibonacci
			<div className="toolbar">
				<span className="obs">(Min: 10)</span>
				<button className="minus" onClick={() => setDepth(old => old > 10 ? old -10 : old)}>-</button>
				<span>depth {depth}</span>
				<button className="plus" onClick={() => setDepth(old => old < 70 ? old +10 : old)}>+</button>
				<span className="obs">(Máx: 70)</span>
			</div>
			</h1>
			{fibonacci.map((fibo, index) => {
				const newColor = colors.shift();
				colors.push(newColor);
				return (
					<div className="row" key={index}>
						<span className="filler">#{index +1}</span>
						<span className="p" style={{ backgroundColor: colors[0] }}>{fibo.p1.toLocaleString('pt-BR', {useGrouping: true})}</span>
						<span className="mais">+</span>
						<span className="p" style={{ backgroundColor: colors[1] }}>{fibo.p2.toLocaleString('pt-BR', {useGrouping: true})}</span>
						<span className="igual">=</span>
						<span className="p" style={{ backgroundColor: colors[2] }}>{fibo.newP.toLocaleString('pt-BR', {useGrouping: true})}</span>
						<span className="filler"></span>
					</div>
				);
			})}
		</div>
	);
}

export default Fibonacci;