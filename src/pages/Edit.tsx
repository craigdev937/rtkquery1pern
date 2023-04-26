import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";
import { IPlayer } from "../models/Interfaces";

export const Edit = () => {
    const naviagte = useNavigate();
    const { id } = useParams();
    const playerID = id !== undefined ? String(id) : "";
    const [player, setPlayer] = React.useState<IPlayer>({
        id: playerID, title: "", first: "", 
        last: "", age: 0, info: ""
    });

    const { data: playerDATA, 
        isSuccess: playerDATAReady 
    } = PlayerAPI.useGetOneQuery(playerID);

    const [deletePlayer, {
        isLoading: isDeleting, isSuccess: isDeleted
    }] = PlayerAPI.useDeleteMutation();

    const [editPlayer, {
        isLoading: isUpdating, isSuccess: isSaved
    }] = PlayerAPI.useUpdateMutation();

    React.useEffect(() => {
        if (playerDATAReady) {
            setPlayer(playerDATA);
        }
    }, [playerDATA, playerDATAReady]);

    function goBack(time: number) {
        setTimeout(() => {
            naviagte("/");
        }, time);
    };

    function removePlayer(){
        deletePlayer(playerID);
        goBack(700);
    };

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await editPlayer(player);
        setPlayer({
            id: playerID, title: "", first: "", 
            last: "", age: 0, info: ""
        });
        goBack(700);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <aside>
                <aside>
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Title"
                        value={player.title}
                        onChange={handleChange}
                    />
                </aside>
                    <input 
                        type="text" 
                        name="first"
                        placeholder="First"
                        value={player.first}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <input 
                        type="text" 
                        name="last"
                        placeholder="Last"
                        value={player.last}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <input 
                        type="number" 
                        name="age"
                        placeholder="Age"
                        value={player.age}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <input 
                        type="text" 
                        name="info"
                        placeholder="Info"
                        value={player.info}
                        onChange={handleChange}
                    />
                </aside>
                <footer>
                    <button><Link to="/">Cancel</Link></button>
                    <button 
                        onClick={removePlayer}
                        >{isDeleting ? "Deleting..." : "Delete"}
                    </button>
                    <button 
                        type="submit"
                        >{isUpdating ? "Updating..." : "Update"}
                    </button>
                </footer>
                {isDeleted && (
                    <div>Player was Deleted, redirecting...</div>
                )}
                {isSaved && (
                    <div>Player now Saved, redirecting...</div>
                )}
            </form>
        </React.Fragment>
    );
};


