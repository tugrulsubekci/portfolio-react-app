import React from "react";

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
    playLink: `${process.env.PUBLIC_URL}/games/Pacman/index.html`,
    logoLink: `${process.env.PUBLIC_URL}/logos/pacman-logo.png`,
    width: "750",
    height: "750",
    allowFullScreen: true,
    descriptions:[{
        type:"ul", 
        text:"Raycasts and boxcasts"
    },{
        type:"ul", 
        text:"Tilemaps"
    },{
        type:"ul", 
        text:"2D character animations"
    }],
    links: [{
        name:"View my github repository",
        path:"https://github.com/tugrulsubekci/Pacman"
    }],
    images:[
        {
           path:`${process.env.PUBLIC_URL}/images/pacman/1.jpg`,
           width:"300px",
           height:"300px"
        },
        {
            path:`${process.env.PUBLIC_URL}/images/pacman/2.jpg`,
            width:"300px",
            height:"300px"
        },
        {
            path:`${process.env.PUBLIC_URL}/images/pacman/3.jpg`,
            width:"300px",
            height:"300px"
        }
    ]
}

export let games = [tetrisGame, pacmanGame];