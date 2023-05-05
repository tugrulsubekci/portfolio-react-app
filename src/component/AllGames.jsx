import React  from "react";
import { useNavigate } from "react-router-dom";
import "../styles/allGames.css";

function AllGames() {
    const navigate = useNavigate()

    return (
        <div class="wrapper-grid-allgames root-allgames">
            <div class="container-allgames">
                <div class='banner-img-allgames'></div>
                <img src={`${process.env.PUBLIC_URL}/logos/rapid-render-logo.png`} alt='profile image' class="profile-img-allgames" />
                <h1 class="name-allgames">Rapid Render</h1>
                <p class="description-allgames">An interior design application</p>
                <button class='btn-allgames'>Show details</button>
            </div>

            <div class="container-allgames">
                <div class='banner-img-allgames'></div>
                <img src={`${process.env.PUBLIC_URL}/logos/connect-them-all-logo.png`} alt='profile image' class="profile-img-allgames" />
                <h1 class="name-allgames">Connect Them All</h1>
                <p class="description-allgames">Puzzle</p>
                <button class='btn-allgames'>Show details</button>
            </div>

            <div class="container-allgames">
                <div class='banner-img-allgames'></div>
                <img src={`${process.env.PUBLIC_URL}/logos/soccer-ball-run-logo.png`} alt='profile image' class="profile-img-allgames" />
                <h1 class="name-allgames">Soccer Ball Run</h1>
                <p class="description-allgames">Platformer</p>
                <button class='btn-allgames'>Show details</button>
            </div>

            <div class="container-allgames">
                <div class='banner-img-allgames'></div>
                <img src={`${process.env.PUBLIC_URL}/logos/tetris-logo.png`} alt='profile image' class="profile-img-allgames" />
                <h1 class="name-allgames">Tetris</h1>
                <p class="description-allgames">Puzzle</p>
                <button class='btn-allgames'>Show details</button>
            </div>

            <div class="container-allgames">
                <div class='banner-img-allgames'></div>
                <img src={`${process.env.PUBLIC_URL}/logos/pacman-logo.png`} alt='profile image' class="profile-img-allgames" />
                <p class="name-allgames">Pacman</p>
                <p class="description-allgames">Action</p>
                <button class='btn-allgames'>Show details</button>
            </div>

            <div class="container-allgames">
                <div class='banner-img-allgames'></div>
                <img src={`${process.env.PUBLIC_URL}/logos/snake-logo.png`} alt='profile image' class="profile-img-allgames" />
                <p class="name-allgames">Snake</p>
                <p class="description-allgames">Hyper Casual</p>
                <button class='btn-allgames'>Show details</button>
            </div>

            <div class="container-allgames">
                <div class='banner-img-allgames'></div>
                <img src={`${process.env.PUBLIC_URL}/logos/helix-jump-logo.png`} alt='profile image' class="profile-img-allgames" />
                <p class="name-allgames">Helix Jump</p>
                <p class="description-allgames">Hyper Casual</p>
                <button class='btn-allgames'>Show details</button>
            </div>

            <div class="container-allgames">
                <div class='banner-img-allgames'></div>
                <img src={`${process.env.PUBLIC_URL}/logos/chemistry-lab-logo.png`} alt='profile image' class="profile-img-allgames" />
                <p class="name-allgames">Chemistry Lab</p>
                <p class="description-allgames">Educational</p>
                <button class='btn-allgames'>Show details</button>
            </div>

            <div class="container-allgames">
                <div class='banner-img-allgames'></div>
                <img src={`${process.env.PUBLIC_URL}/logos/my-bird-logo.png`} alt='profile image' class="profile-img-allgames" />
                <p class="name-allgames">My Bird</p>
                <p class="description-allgames">Hyper Casual</p>
                <button class='btn-allgames'>Show details</button>
            </div>
        </div>
    );
  }
  
export default AllGames;
