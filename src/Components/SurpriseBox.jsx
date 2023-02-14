import React, { useState } from "react";

// Predefined list of winning numbers
const winnerNumbers = [1, 2, 3];

export const SurpriseBox = () => {
    const [userName, setUserName] = useState("");

    // State to hold the number of visits for each user
    const [visits, setVisits] = useState({});

    /**
     * onChange userName input box
     * @param {object} event 
     */
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    /**
     * updates the visits state 
     * by incrementing the number of visits for the current user.
     */
    const handleVisit = () => {
        setVisits((visits) => {
            const newVisits = { ...visits };
            if (!newVisits[userName]) {
                newVisits[userName] = 0;
            }
            newVisits[userName]++;
            return newVisits;
        });
        setUserName('');
    };

    /**
     * Checks whether the current number of visits for the current user 
     * is included in the predefined list of winning numbers,
     * and returns a boolean value
     * @returns boolean
     */
    const isWinner = () => {
        return winnerNumbers.includes(visits[userName]);
    };

    /**
     * Checks whether the current user has reached the maximum number of visits, 
     * and returns a boolean value.
     * @returns boolean
     */
    const isCanVisit = () => {
        const userVisits = visits[userName] || 0;
        return userVisits < winnerNumbers[winnerNumbers.length - 1];
    };

    return (
        <div>
            <h1>Surprise Box</h1>
            <p>
                Enter your userName:
                <input
                    type="text"
                    value={userName}
                    onChange={handleUserNameChange}
                />
            </p>
            {isCanVisit() ? (
                <button onClick={handleVisit}>Visit the surprise box</button>
            ) : (
                <p>You have reached the maximum number of visits.</p>
            )}
            {isWinner() ? (
                <p>Congratulations, you are a winner!</p>
            ) : (
                <p>Sorry, you are not a winner.</p>
            )}
        </div>
    );
}
