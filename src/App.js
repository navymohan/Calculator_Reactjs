import {useState} from 'react'

function App() {
	const listOfOperators = ['+', '-', '*', '/', '.', '**'];

	const [calculationString, setCalculationString] = useState("");
	const [result, setResult] = useState("");

	// Function to update the calculation string
	const updateCalculationString = value => {
		// If the string is empty then no operator is required and also
		// If the last character is an operator then another operator can't be added
		if((listOfOperators.includes(value) && calculationString === '') ||
			(listOfOperators.includes(value) && listOfOperators.includes(calculationString.slice(-1)))){
				return;
		}
		// If there is no problem with the calculation string then update the string
		setCalculationString(calculationString+value);
		console.log(calculationString);

		// For evaluation of the string using eval function
		if(!listOfOperators.includes(value)){
			// setResult(Function("return "+calculationString + value).toString());
			setResult(eval(calculationString + value).toString());
		}
	}

	// Function for equals to button
	const equalsFunction = () => {
		if(listOfOperators.includes(calculationString.slice(-1))){
			return;
		}
		setCalculationString(result);
	}

	// Function for Clear button
	const clearFunction = () => {
		if(calculationString === '')
		return;
		else{
			const newString = calculationString.slice(0, -1);
			setCalculationString(newString);
		}
	}

	// Function for AC button
	const acFunction = () => {
		setCalculationString("");
	}

	// Function to create all the digits from 1 to 9
	const forCreatingDigits = () => {
		const digits = [];
		for (let i = 1;i<10;i++){
			digits.push(
				<button onClick={() => updateCalculationString(i.toString())}>{i}</button>
			)
		}
		return digits;
	}

  return (
    <div className="App">
    	<div className="calculator">
			<div className='heading'>
				CALCULATOR
			</div>
			{/* Div for the display of the calculator */}
			<div className="screen">
				{/* If result is not null then span otherwise empty string */}
				{/* {result ? <span>({result})</span> : ''} */}
				{calculationString || "0"}
			</div>
			{/* Div for the operators */}
			<div className="operators">
				<button onClick={() => updateCalculationString('+')}>+</button>
				<button onClick={() => updateCalculationString('-')}>-</button>
				<button onClick={() => updateCalculationString('*')}>*</button>
				<button onClick={() => updateCalculationString('/')}>/</button>
				<button onClick={() => updateCalculationString('**')}>^</button>
				<button onClick={() => updateCalculationString('(')}>(</button>
				<button onClick={() => updateCalculationString(')')}>)</button>
				<button onClick={() => updateCalculationString('Math.PI')}>π</button>
				<button onClick={() => updateCalculationString('Math.E')}>e</button>
				<button onClick={() => updateCalculationString('Math.sqrt')}>√</button>
				<button onClick={() => updateCalculationString('Math.log')}>ln</button>
				<button onClick={() => updateCalculationString('Math.log10')}>log</button>
				<button onClick={() => updateCalculationString('Math.sin')}>sin</button>
				<button onClick={() => updateCalculationString('Math.cos')}>cos</button>
				<button onClick={() => updateCalculationString('Math.tan')}>tan</button>
				<button onClick={() => updateCalculationString('Math.asin')}>sin<sup>-1</sup></button>
				<button onClick={() => updateCalculationString('Math.acos')}>cos<sup>-1</sup></button>
				<button onClick={() => updateCalculationString('Math.atan')}>tan<sup>-1</sup></button>
				<button onClick={clearFunction}>CLEAR</button>
			</div>
			{/* Div for the digits */}
			<div className="digits">
				{forCreatingDigits()}
				<button onClick={() => updateCalculationString('0')}>0</button>
				<button onClick={() => updateCalculationString('.')}>.</button>
				<button onClick={equalsFunction}>=</button>
				<button onClick={acFunction}>AC</button>
			</div>
		</div>
    </div>
  );
}

export default App;
