import React from "react";

function Character () {
    const character = {
        display: "block",
        border: "1px solid salmon",
        background: "blue",
        height: "340px",
        padding: "10px",
        width: "150px"
    }

    const character__header = {
        padding: "10px"
    }

    const character__footer = {
        color: "black"
    }

    return (
        <div style={character}>
            <div style={character__header}>
                <h1>Character</h1>
            </div>
            <div style={character__footer}>
                <h1>Footer</h1>
            </div>
        </div>
    )
}

export default Character;
