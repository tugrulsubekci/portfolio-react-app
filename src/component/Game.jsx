import React from "react";
import { Link, useParams } from "react-router-dom";

function Game() {
    const params = useParams();

    const tetrisGame = {
        name:"Tetris",
        isPlayable: true,
        playLink: `${process.env.PUBLIC_URL}/games/Tetris/index.html`,
        logoLink: `${process.env.PUBLIC_URL}/logos/tetris-logo.png`,
        width: "350",
        height: "750",
        allowFullScreen: true,
        descriptions:[{
            type:"ul", 
            text:"I was really curious about puzzle games. Then, I started making Tetris and really enjoyed. I think, most important thing is its algorithm and I liked it so much."
        },{
            type:"ul", 
            text:"This is my first puzzle game experince."
        },{
            type:"ul", 
            text:"Left Arrow/Right Arrow to move left/right, Up Arrow to rotate tetromino and Down Arrow to fall fast."
        }],
        links: [{
            name:"View my github repository",
            path:"https://github.com/tugrulsubekci/Tetris"
        }],
    }
    const pacmanGame = {
        name:"Pacman",
        isPlayable: true,
        playLink: `${process.env.PUBLIC_URL}/games/Tetris/index.html`,
        logoLink: `${process.env.PUBLIC_URL}/logos/pacman-logo.png`,
        width: "350",
        height: "750",
        allowFullScreen: true,
        descriptions:[{
            type:"ul", 
            text:"I was really curious about puzzle games. Then, I started making Tetris and really enjoyed. I think, most important thing is its algorithm and I liked it so much."
        },{
            type:"ul", 
            text:"This is my first puzzle game experince."
        },{
            type:"ul", 
            text:"Left Arrow/Right Arrow to move left/right, Up Arrow to rotate tetromino and Down Arrow to fall fast."
        }],
        links: [{
            name:"View my github repository",
            path:"https://github.com/tugrulsubekci/Tetris"
        }],
    }

    let games = [tetrisGame];
    console.log(params.gameName);
    console.log(tetrisGame.name);

    let game = games.find(element => element.name === params.gameName);

    return (
        <div className="container center-container">
            <iframe
                src={game.playLink}
                title="WebGL Build"
                width={game.width}
                height={game.height}
                allowFullScreen = {game.allowFullScreen}
                loading="lazy"
                style={{border: "none"}}
            />
            <img src={game.logoLink} alt="game logo"/>
            <h1>{game.name}</h1>
            <ul>
                {game.descriptions.map((d,index)=> {
                    if(d.type ==="ul")
                        return <li key={index}>{d.text}</li>
                })}
            </ul>
            {game.links.map((l,index)=> <Link key={index} to={l.path}>{l.name}</Link>)}
        </div>

    );
  }
  
export default Game;
