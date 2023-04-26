import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";

export const Add = () => {
    const navigate = useNavigate();
    const [addPlayer] = PlayerAPI.useAddMutation();
    const [player, setPlayer] = React.useState({
        id: "", title: "", first: "", 
        last: "", age: 0, info: ""
    });

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await addPlayer(player);
        setPlayer({
            id: "", title: "", first: "", 
            last: "", age: 0, info: ""
        });
        navigate("/");
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <aside>
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Title"
                        value={player.title}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
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
                <button 
                    type="submit"
                    >Add Player
                </button>
            </form>
        </React.Fragment>
    );
};


