import React, { useState } from "react";

// predefined list of winner numbers
const WINNER_NUMBERS = [1, 3, 5];

export function SurpriseBox() {
    const [username, setUsername] = useState("");
    const [winners, setWinners] = useState([]);
    const [losers, setLosers] = useState([]);

    /**
     * Handler for username input changes
     * @param {object} event 
     */
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    /**
     * handler for user submit
     * don't count visits for empty usernames
     * check if this username has already won or lost
     * add this username to the appropriate list
     * Reset the username input field
     */
    const handleVisit = () => {
        if (!username) {
            alert('Enter participate username ');
            return;
        }
        if (winners.includes(username)) {
            alert(`${username},you were already winner participate in this Surprise box and you can not re-enter.`);
            return;
        }
        if (losers.includes(username)) {
            alert(`${username}, you were already losers participate in this Surprise box and you can not re-enter.`);
            return;
        }
        const count = winners.length + losers.length + 1;
        if (WINNER_NUMBERS.includes(count)) {
            setWinners([...winners, username]);
            alert(`${username},you are winner!`);
        } else {
            setLosers([...losers, username]);
            alert(`${username}, you are loser!.`);
        }
        setUsername("")
    };

    return (
        <div>
            <h1>Surprise Box</h1>
            <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your name"
            />
            <button
                type="submit"
                onClick={handleVisit}
            >
                Submit
            </button>
        </div>
    );
}
