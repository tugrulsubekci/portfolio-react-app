import React  from "react";

function Game() {
    return (
        <iframe
            src={`${process.env.PUBLIC_URL}/Tetris/index.html`}
            title="WebGL Build"
            width="1024"
            height="768"
            allowFullScreen
        ></iframe>
    );
  }
  
export default Game;
