import React from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../models/Interfaces";

type PLA = {
    player: IPlayer
};

export const Info = ({player}: PLA) => {
    return (
        <React.Fragment>
            <h2>
                <Link to={`/edit/${player.id}`}
                    >{player.first}
                </Link>
            </h2>
            <section key={player.id}>
                <h1>{player.first} {player.last}</h1>
                <h3>{player.title}</h3>
                <p>Age: {player.age}</p>
                <p>Info: {player.info}</p>
            </section>
        </React.Fragment>
    );
};


