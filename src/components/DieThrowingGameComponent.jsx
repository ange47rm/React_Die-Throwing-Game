import * as React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export default function DieThrowingGameComponent() {
    return (
        <div>
            <form className='centered'>
                <h3>Number of times to throw the die</h3><br></br>
                <Input type='number' />
                <Button variant="contained" size="large" id="submit-btn">Throw Die!</Button>
            </form>


        </div>

    );
}
