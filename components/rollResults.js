export function rollResults(dice, setDice, advantage, setAdvantage, disadvantage, setDisadvantage, setAnimationDelayAdvantages, successes, setSuccesses, failure, setFailure, triumphs, setTriumphs, disaster, setDisaster, setAnimationDelaySuccesses, getRandomInteger){
    if(dice.yellow > 0){
        const yellowDiceRemaining = dice.yellow - 1;
        const yellowResult = getRandomInteger(1, 13);
        if (yellowResult >= 2 && yellowResult <= 3){
            setSuccesses([...successes, {key: successes.length +1, negated: false}])
        }
        if (yellowResult >= 4 && yellowResult <= 5){
            setSuccesses([...successes, {key: successes.length +1, negated: false}, {key: successes.length +2, negated: false}])
        }
        if (yellowResult === 6){
            setAdvantage([...advantage, {key: advantage.length +1, negated: false}])
        }
        if (yellowResult >= 7 && yellowResult <= 9){
            setAdvantage([...advantage, {key: advantage.length +1, negated: false}]);
            setSuccesses([...successes, {key: successes.length +1, negated: false}])
        }
        if (yellowResult >= 10 && yellowResult <= 11){
            setAdvantage([...advantage, {key: advantage.length +1, negated: false}, {key: advantage.length +2, negated: false}])
        }
        if (yellowResult === 12){
            setTriumphs([...triumphs, {key: triumphs.length +1}])
            setSuccesses([...successes, {key: successes.length +1, negated: false}])
        }
        setDice({...dice, yellow: yellowDiceRemaining});
        return;
    }
    if(dice.green > 0){
        const greenDiceRemaining = dice.green -1;
        const greenResult = getRandomInteger(1, 9);
        if (greenResult >= 2 && greenResult <= 3){
            setSuccesses([...successes, {key: successes.length +1, negated: false}])
        }
        if (greenResult === 4){
            setSuccesses([...successes, {key: successes.length +1, negated: false}, {key: successes.length +2, negated: false}])
        }
        if (greenResult >= 5 && greenResult <= 6){
            setAdvantage([...advantage, {key: advantage.length +1, negated: false}])
        }
        if (greenResult === 7){
            setAdvantage([...advantage, {key: advantage.length +1, negated: false}])
            setSuccesses([...successes, {key: successes.length +1, negated: false}])
        }
        if (greenResult === 8){
            setAdvantage([...advantage, {key: advantage.length +1, negated: false}, {key: advantage.length +2, negated: false}])
        }
        setDice({...dice, green: greenDiceRemaining - 1});
        return;
    }
    if(dice.blue > 0){
        const blueDiceRemaining = dice.blue -1
        const blueResult = getRandomInteger(1, 7);
        if (blueResult === 3){
            setSuccesses([...successes, {key: successes.length +1, negated: false}])
        }
        if (blueResult === 4){
            setSuccesses([...successes, {key: successes.length +1, negated: false}])
            setAdvantage([...advantage, {key: advantage.length +1, negated: false}])
        }
        if (blueResult === 5){
            setAdvantage([...advantage, {key: advantage.length +1, negated: false},{key: advantage.length +2, negated: false}])
        }
        if (blueResult === 6){
            setAdvantage([...advantage, {key: advantage.length +1, negated: false}])
        }
        setDice({...dice, blue: blueDiceRemaining - 1});
        return;
    }
    if(dice.red > 0){
        const redDiceRemaining = dice.red -1
        const redResult = getRandomInteger(1, 13)
        if (redResult >= 2 && redResult <= 3){
            setFailure([...failure, {key: failure.length +1, negated: false}])
        }
        if (redResult >= 4 && redResult <= 5){
            setFailure([...failure, {key: failure.length +1, negated: false},{key: failure.length +2, negated: false}])
        }
        if (redResult >= 6 && redResult <= 7){
            setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}])
        }
        if (redResult >= 8 && redResult <= 9){
            setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}])
            setFailure([...failure, {key: failure.length +1, negated: false}])
        }
        if (redResult >= 10 && redResult <= 11){
            setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}, {key: disadvantage.length +2, negated: false}])
        }
        if (redResult === 12){
            setDisaster([...disaster, {key: disaster.length +1}])
            setFailure([...failure, {key: failure.length +1, negated: false}])
        }
        setDice({...dice, red: redDiceRemaining});
        return;
    }
    if(dice.purple > 0){
        const purpleDiceRemaining = dice.purple -1
        const purpleResult = getRandomInteger(1, 9)
        if (purpleResult === 2){
            setFailure([...failure, {key: failure.length +1, negated: false}])
        }
        if (purpleResult === 3){
            setFailure([...failure, {key: failure.length +1, negated: false}, {key: failure.length +2, negated: false}])
        }
        if (purpleResult >= 4 && purpleResult <= 6){
            setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}])
        }
        if (purpleResult === 7){
            setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}, {key: disadvantage.length +2, negated: false}])
        }
        if (purpleResult === 8){
            setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}])
            setFailure([...failure, {key: failure.length +1, negated: false}])
        }
        setDice({...dice, purple: purpleDiceRemaining});
        return;
    }
    if(dice.black > 0){
        const blackDiceRemaining = dice.black -1
        const blackResult = getRandomInteger(1, 7)
        if (blackResult >= 3 && blackResult <= 4){
            setFailure([...failure, {key: failure.length +1, negated: false}])
        }
        if (blackResult > 4){
            setDisadvantage([...disadvantage, {key: disadvantage.length +1, negated: false}])
        }
        setDice({...dice, black: blackDiceRemaining});
        return;
    }
    negateOpposites(advantage, setAdvantage, disadvantage, setDisadvantage, setAnimationDelayAdvantages);
    negateOpposites(successes, setSuccesses, failure, setFailure, setAnimationDelaySuccesses);  
}

function negateOpposites(firstArray, setFirstArray, secondArray, setSecondArray, setDelay){
    const compareArrayLength = [firstArray.length, secondArray.length];
    compareArrayLength.sort(function(a, b){return b - a});
    const smallerArray = compareArrayLength.pop();
    const biggerArray = compareArrayLength.shift()
    let firstArrayNegated = []
    let firstArrayNotNegated = []
    let secondArrayNegated = []
    let secondArrayNotNegated = []
    function negateFirstArray(arrayEntry){
        if(arrayEntry.key <= smallerArray){
            firstArrayNegated.push({...arrayEntry, negated: true})
        } else {
            firstArrayNotNegated.push(arrayEntry)
        }
    }
    function negateSecondArray(arrayEntry){
        if(arrayEntry.key <= smallerArray){
            secondArrayNegated.push({...arrayEntry, negated: true})
        } else {
            secondArrayNotNegated.push(arrayEntry)
        }
    }
    firstArray.map(negateFirstArray);
    secondArray.map(negateSecondArray);
    setFirstArray([...firstArrayNegated, ...firstArrayNotNegated])
    setSecondArray([...secondArrayNegated, ...secondArrayNotNegated])
    setDelay(biggerArray)
}