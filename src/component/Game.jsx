import React from "react";
import { Link, useParams } from "react-router-dom";
import {games} from "../data";

function Game() {
    const params = useParams();

    console.log(params.gameName);

    let game = games.find(element => element.name === params.gameName);

    return (
        <div className="center-container" style={{width: game.width, height: game.height}}>
            <iframe
                src={game.playLink}
                title="WebGL Build"
                width={game.width}
                height={game.height}
                allowFullScreen = {game.allowFullScreen}
                loading="lazy"
                style={{border: "none"}}
            />
            <div className="container">
                <div className="row">
                    <div className={game.images !== undefined ? "game-left" : ""}>
                        {game.images !== undefined ? "" : <img src={game.logoLink} alt="game logo"/>}
                        <h1>{game.name}</h1>
                        {game.descriptions !== undefined ? game.descriptions.map((d,index) => {
                            if(d.type === "p")
                                return <p key={index}>{d.text}</p>
                        }): ""}
                        <ul>
                            {game.descriptions.map((d,index)=> {
                                if(d.type ==="ul")
                                    return <li key={index}>{d.text}</li>
                            })}
                        </ul>
                        {game.links.map((l,index)=> <Link key={index} to={l.path} target="_blank">{l.name}</Link>)}
                    </div>
                    <div className={game.images !== undefined ? "game-right" : ""}>
                        {game.images !== undefined ? game.images.map((i,index)=> <img key={index} src={i.path} alt="game image" style={{width: i.width, height: i.height}} />) : ""}
                    </div>
                </div>
            </div>
        </div>

    );
  }
  
export default Game;
