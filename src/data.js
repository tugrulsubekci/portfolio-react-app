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
           original:`${process.env.PUBLIC_URL}/images/pacman/1.jpg`,
           thumbnail:`${process.env.PUBLIC_URL}/images/pacman/1.jpg`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/pacman/2.jpg`,
            thumbnail:`${process.env.PUBLIC_URL}/images/pacman/2.jpg`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/pacman/3.jpg`,
            thumbnail:`${process.env.PUBLIC_URL}/images/pacman/3.jpg`,
        }
    ]
}
const snakeGame = {
    name:"Snake",
    isPlayable: true,
    playLink: `${process.env.PUBLIC_URL}/games/Snake/index.html`,
    logoLink: `${process.env.PUBLIC_URL}/logos/snake-logo.png`,
    width: "750",
    height: "600",
    allowFullScreen: true,
    descriptions:[{
        type:"p", 
        text:"I made a snake clone which was my first individual project. I think, most important side of game its algoritm."
    }],
    links: [{
        name:"View my github repository",
        path:"https://github.com/tugrulsubekci/Project_Snake2D"
    }],
}

const helixJump = {
    name:"Helix Jump",
    isPlayable: true,
    playLink: `${process.env.PUBLIC_URL}/games/HelixJump/index.html`,
    logoLink: `${process.env.PUBLIC_URL}/logos/helix-jump-logo.png`,
    width: "400",
    height: "700",
    allowFullScreen: true,
    descriptions:[
        {
            type:"ul", 
            text:"Sliders"
        },
        {
            type:"ul",
            text:"Button animations"
        },
        {
            type:"ul",
            text:"Data saving with player prefs"
        },
        {
            type:"ul",
            text:"Trail renderer"
        },
        {
            type:"ul",
            text:"Procedural level generation"
        }
    ],
    links: [{
        name:"View my github repository",
        path:"https://github.com/tugrulsubekci/Helix-Jump-3D"
    }],
    images:[
        {
           original:`${process.env.PUBLIC_URL}/images/helixJump/1.jpg`,
           thumbnail:`${process.env.PUBLIC_URL}/images/helixJump/1.jpg`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/helixJump/2.jpg`,
            thumbnail:`${process.env.PUBLIC_URL}/images/helixJump/2.jpg`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/helixJump/3.jpg`,
            thumbnail:`${process.env.PUBLIC_URL}/images/helixJump/3.jpg`,
        }
    ]
}

const myBird = {
    name:"My Bird",
    isPlayable: true,
    playLink: `${process.env.PUBLIC_URL}/games/MyBird/index.html`,
    logoLink: `${process.env.PUBLIC_URL}/logos/my-bird-logo.png`,
    width: "400",
    height: "700",
    allowFullScreen: true,
    descriptions:[
        {
            type:"ul", 
            text:"I made all the models (birds, clouds,obstacles) myself in blender."
        },
        {
            type:"ul",
            text:"I added a flappy wing animation to the birds."
        },
        {
            type:"ul",
            text:"I published it on Google Play Store and I integrated unity ads."
        },
        {
            type:"ul",
            text:"This is the first project I published on Google Play Store."
        },
    ],
    links: [{
        name:"View my github repository",
        path:"https://github.com/tugrulsubekci/MyBird"
    }],
    images:[
        {
           original:`${process.env.PUBLIC_URL}/images/myBird/1.jpg`,
           thumbnail:`${process.env.PUBLIC_URL}/images/myBird/1.jpg`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/myBird/2.jpg`,
            thumbnail:`${process.env.PUBLIC_URL}/images/myBird/2.jpg`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/myBird/3.jpg`,
            thumbnail:`${process.env.PUBLIC_URL}/images/myBird/3.jpg`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/myBird/4.jpg`,
            thumbnail:`${process.env.PUBLIC_URL}/images/myBird/4.jpg`,
        }
    ]
}
const chemistryLab = {
    name:"Chemistry Lab",
    isPlayable: true,
    playLink: `${process.env.PUBLIC_URL}/games/ChemistryLab/index.html`,
    logoLink: `${process.env.PUBLIC_URL}/logos/chemistry-lab-logo.png`,
    width: "650",
    height: "450",
    allowFullScreen: true,
    descriptions:[
        {
            type:"ul", 
            text:"I made this educational chemistry game for I Love Science Game Jam."
        },
        {
            type:"ul",
            text:"There was a time limit which is 48 hours."
        },
        {
            type:"ul",
            text:"You can drag potions to the reactant 1 and 2. If you success, you can create a product and you can finish your orders."
        },
        {
            type:"ul",
            text:"I applied the Object Pooling method for the first time."
        },
    ],
    links: [{
        name:"View my github repository",
        path:"https://github.com/tugrulsubekci/ILoveScienceGameJam"
    }],
}

const soccerBallRun = {
    name:"Soccer Ball Run",
    isPlayable: false,
    playLink: `https://youtube.com/embed/MT38cGfd7pA?feature=share`,
    logoLink: `${process.env.PUBLIC_URL}/logos/soccer-ball-run-logo.png`,
    width: "800",
    height: "450",
    allowFullScreen: true,
    videoLink: "",
    descriptions:[
        {
            type:"ul", 
            text:"I made a game from scratch and named Soccer Ball Run. It was my idea and has a new concept."
        },
        {
            type:"ul",
            text:"I worked with a game artist and I realized that game art is very important."
        },
        {
            type:"ul",
            text:"I faced many problems because of SDK’s integration. Also, mobile optimization was a very difficult process, but now the performance of my game is quite good."
        },
        {
            type:"ul",
            text:"I added vibration, shop system, Unity Mediation SDK, Facebook SDK, Gameanalytics SDK and published it on Google Play Store."
        },
        {
            type:"ul",
            text:"Please download the game and watch some ads for me :)"
        }
    ],
    links: [{
        name:"View my github repository",
        path:"https://github.com/tugrulsubekci/SoccerBallRun"
    }],
    images:[
        {
           original:`${process.env.PUBLIC_URL}/images/soccerBallRun/1.png`,
           thumbnail:`${process.env.PUBLIC_URL}/images/soccerBallRun/1.png`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/soccerBallRun/2.png`,
            thumbnail:`${process.env.PUBLIC_URL}/images/soccerBallRun/2.png`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/soccerBallRun/3.png`,
            thumbnail:`${process.env.PUBLIC_URL}/images/soccerBallRun/3.png`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/soccerBallRun/4.png`,
            thumbnail:`${process.env.PUBLIC_URL}/images/soccerBallRun/4.png`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/soccerBallRun/5.png`,
            thumbnail:`${process.env.PUBLIC_URL}/images/soccerBallRun/5.png`,
        }
    ]
}
const rapidRender = {
    name:"Rapid Render",
    isPlayable: false,
    playLink: `https://www.youtube.com/embed/pfor73SM5SQ`,
    logoLink: `${process.env.PUBLIC_URL}/logos/rapid-render-logo.png`,
    width: "800",
    height: "450",
    allowFullScreen: true,
    videoLink: "",
    descriptions:[
        {
            type:"ul", 
            text:"You can build a home with every detail. (Ceramics, windows, doors…)"
        },
        {
            type:"ul",
            text:"You can take a high-quality render at cloud within 60 seconds."
        },
        {
            type:"ul",
            text:"Download all products (chair, table…) from server at runtime."
        },
        {
            type:"ul",
            text:"I can say, I mastered in OOP with this project"
        }
    ],
    links: [{
        name:"View my github repository",
        path:"https://github.com/sugartechnology/3Designer"
    }],
    images:[
        {
           original:`${process.env.PUBLIC_URL}/images/rapidRender/1.png`,
           thumbnail:`${process.env.PUBLIC_URL}/images/rapidRender/1.png`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/rapidRender/2.png`,
            thumbnail:`${process.env.PUBLIC_URL}/images/rapidRender/2.png`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/rapidRender/3.png`,
            thumbnail:`${process.env.PUBLIC_URL}/images/rapidRender/3.png`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/rapidRender/4.png`,
            thumbnail:`${process.env.PUBLIC_URL}/images/rapidRender/4.png`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/rapidRender/5.png`,
            thumbnail:`${process.env.PUBLIC_URL}/images/rapidRender/5.png`,
        }
    ]
}
const connectThemAll = {
    name:"Connect Them All",
    isPlayable: false,
    playLink: `https://www.youtube.com/embed/nnrWYf4EwZk`,
    logoLink: `${process.env.PUBLIC_URL}/logos/connect-them-all-logo.png`,
    width: "800",
    height: "450",
    allowFullScreen: true,
    videoLink: "",
    descriptions:[
        {
            type:"ul", 
            text:"I made a puzzle game about connecting the pops."
        },
        {
            type:"ul",
            text:"Thanks to the algorithm I wrote, the game doesn't end and continues forever."
        },
        {
            type:"ul",
            text:"Fully mobile optimized and has no performance problems."
        },
        {
            type:"ul",
            text:"I added vibration, Unity Ads, Appmetrica, Firebase Analytics and Messaging, Google Play Services and Airbridge. Also, I published on Google Play Store."
        }
    ],
    links: [{
        name:"View my github repository",
        path:"https://github.com/sugartechnology/ConnectThemAll"
    }],
    images:[
        {
           original:`${process.env.PUBLIC_URL}/images/connectThemAll/1.jpg`,
           thumbnail:`${process.env.PUBLIC_URL}/images/connectThemAll/1.jpg`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/connectThemAll/2.jpg`,
            thumbnail:`${process.env.PUBLIC_URL}/images/connectThemAll/2.jpg`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/connectThemAll/3.jpg`,
            thumbnail:`${process.env.PUBLIC_URL}/images/connectThemAll/3.jpg`,
        },
        {
            original:`${process.env.PUBLIC_URL}/images/connectThemAll/4.jpg`,
            thumbnail:`${process.env.PUBLIC_URL}/images/connectThemAll/4.jpg`,
        }
    ]
}

export let games = [tetrisGame, pacmanGame, snakeGame, helixJump, myBird, chemistryLab, soccerBallRun, rapidRender, connectThemAll];