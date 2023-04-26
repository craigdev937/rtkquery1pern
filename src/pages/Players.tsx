import React from "react";
import { Link } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";
import { Info } from "../components/Info";

export const Players = () => {
    const { error, isLoading, data } = 
        PlayerAPI.useFetchAllQuery();
    
    if (error) return <h1>Something Went Wrong</h1>;
    if (isLoading) return <h1>Loading...</h1>;

    return (
        <React.Fragment>
            <header>
                <Link to="/add">Add Player</Link>
            </header>
            {data?.map((player) => (
                <Info 
                    key={player.id} 
                    player={player} 
                />   
            ))}
        </React.Fragment>
    );
};


