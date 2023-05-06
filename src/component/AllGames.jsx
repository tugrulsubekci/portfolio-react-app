import React  from "react";
import "../styles/allGames.css";
import GameCard from "./GameCard";

function AllGames() {
    return (
        <div class="wrapper-grid-allgames root-allgames">
            <GameCard logoPath={`${process.env.PUBLIC_URL}/logos/rapid-render-logo.png`} name="Rapid Render" shortDescription="An interior design application"/>
            <GameCard logoPath={`${process.env.PUBLIC_URL}/logos/connect-them-all-logo.png`} name="Connect Them All" shortDescription="Puzzle"/>
            <GameCard logoPath={`${process.env.PUBLIC_URL}/logos/soccer-ball-run-logo.png`} name="Soccer Ball Run" shortDescription="Platformer"/>
            <GameCard logoPath={`${process.env.PUBLIC_URL}/logos/tetris-logo.png`} name="Tetris" shortDescription="Puzzle"/>
            <GameCard logoPath={`${process.env.PUBLIC_URL}/logos/pacman-logo.png`} name="Pacman" shortDescription="Action"/>
            <GameCard logoPath={`${process.env.PUBLIC_URL}/logos/snake-logo.png`} name="Snake" shortDescription="Hyper Casual"/>
            <GameCard logoPath={`${process.env.PUBLIC_URL}/logos/helix-jump-logo.png`} name="Helix Jump" shortDescription="Hyper Casual"/>
            <GameCard logoPath={`${process.env.PUBLIC_URL}/logos/chemistry-lab-logo.png`} name="Chemistry Lab" shortDescription="Educational"/>
            <GameCard logoPath={`${process.env.PUBLIC_URL}/logos/my-bird-logo.png`} name="My Bird" shortDescription="Hyper Casual"/>
        </div>
    );
}
  
export default AllGames;
