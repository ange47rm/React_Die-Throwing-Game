import React from 'react';

export default function EndResultComponent({ winningStreak, noSixes, showEndResult }) {

    const endResult = () => {
        if (winningStreak > 0) {
            return (
                <h4 className='centered m-5'>The largest winning streak (6's in a row) was: <b>{winningStreak}</b></h4>
            )
        } else if (noSixes === true) {
            return (
                <h4 className='centered m-5'>Bad luck! No streaks of 6's!</h4>
            )
        }
    }

    if (showEndResult) {
        return (
            <>
                {endResult()}
            </>
        )
    }
}