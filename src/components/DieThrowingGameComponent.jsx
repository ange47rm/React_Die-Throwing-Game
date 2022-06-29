import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function DieThrowingGameComponent() {

    const [noOfThrows, setNoOfThrows] = useState();
    const [winningStreat, setWinningStreat] = useState();
    

    const handleThrowDie = (event) => {
        event.preventDefault();
        throwDie(noOfThrows);
        event.target.reset();
    };

    const throwDie = (noOfThrows) => {
        let results = [];
        const diePossibleValues = [1, 2, 3, 4, 5, 6];

        for (let i = 0; i < noOfThrows; i++) {
            const dieResult = diePossibleValues[Math.floor(Math.random() * diePossibleValues.length)];
            console.log(`Throw No ${i + 1}`);
        }

        // result = Math.floor(Math.random() * (6 - 1 + 1) ) + 1; // Achieves the same (no need for a list of posible values).

    }

    return (
        <div>
            <Form onSubmit={handleThrowDie}>
                <Form.Group className="mb-3 centered">
                    <h2>Number of times to throw the die</h2>
                    <Form.Control type="number" max="1000000" placeholder="(Example: 24)" onChange={event => setNoOfThrows(event.target.value)} className="input-field m-5"required />
                </Form.Group>
                <div className='centered'>
                    <Button variant="warning" className='button shadow' id='submit-btn' type="submit">Throw Die!<img src="../../dices.png" alt="die-icon" height="80"/></Button>
                </div>
            </Form>
        </div>
    );
}
