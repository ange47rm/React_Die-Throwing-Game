import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Streak from '../../models/Streak';
import EndResultComponent from '../end-result-component/EndResultComponent';


export default function DieThrowingGameComponent() {

    const [noOfThrows, setNoOfThrows] = useState();
    const [winningStreak, setWinningStreak] = useState();
    const [showEndResult, setShowEndResult] = useState(false);
    const [noSixes, setNoSixes] = useState(false);


    const handleThrowDie = (event) => {
        event.preventDefault();
        throwDie(noOfThrows);
        event.target.reset();
    };

    const throwDie = (noOfThrows) => {
        setShowEndResult(false);
        setNoSixes(false);

        let results = [];
        const diePossibleValues = ['1', '2', '3', '4', '5', '6'];

        for (let i = 0; i < noOfThrows; i++) {
            const dieResult = diePossibleValues[Math.floor(Math.random() * diePossibleValues.length)];
            // result = Math.floor(Math.random() * (6 - 1 + 1) ) + 1; // Achieves the same (no need for a list of posible values).
            results.push(dieResult);
        }
        console.log("Results", results);

        determineWinningStreak(results);
    }

    const determineWinningStreak = (results) => {
        let streakObjects = [];
        let noOfConsecutiveSixes = 0;
        let winningStreak = 0;

        if (results && results.includes('6')) {
            noOfConsecutiveSixes = 1;
        } else {
            console.error('No 6 in the results array!');
            setNoSixes(true);
            setShowEndResult(true);
        }

        for (let i = 0; i < results.length; i++) {
            if (results[i] === '6') {
                if (results[i + 1] !== '6') {
                    streakObjects.push(new Streak(noOfConsecutiveSixes))
                    noOfConsecutiveSixes = 1;
                    continue;
                } else {
                    noOfConsecutiveSixes++;
                }
            }
        }
        console.log(streakObjects);

        for (let streak of streakObjects) {
            if (streak.noOfConsecutiveSixes > winningStreak) {
                winningStreak = streak.noOfConsecutiveSixes
            }
        }
        console.log("Winning Streak:", winningStreak);
        setWinningStreak(winningStreak);
        setShowEndResult(true);
    }

    return (
        <div>
            <Form onSubmit={handleThrowDie}>
                <Form.Group className="mb-3 centered">
                    <h2>- Number of times to throw the die -</h2>
                    <Form.Control type="number" max="1000000" placeholder="(Example: 24)" id='user-input' onChange={event => setNoOfThrows(event.target.value)} className="input-field m-5" required />
                </Form.Group>
                <div className='centered'>
                    <Button className='button shadow' id='submit-btn' type="submit">Throw!<img src="../../dices.png" alt="die-icon" height="80" /></Button>
                </div>
            </Form>

            <EndResultComponent winningStreak={winningStreak} noSixes={noSixes} showEndResult={showEndResult} />
        </div>
    );
}
