import React from "react";
import { useNavigate } from "react-router-dom";

function GameCard(props) {
    const navigate = useNavigate()

    return(
        <div class="container-allgames">
            <div class='banner-img-allgames'></div>
            <img src={props.logoPath} alt='game logo' class="profile-img-allgames" />
            <h1 class="name-allgames">{props.name}</h1>
            <p class="description-allgames">{props.shortDescription}</p>
            <button onClick={() => navigate(props.name)} class='btn-allgames'>Show details</button>
        </div>
    )
}

export default GameCard;