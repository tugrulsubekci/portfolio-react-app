import React  from "react";
import "../../styles/styles.css";
import portre from "../../images/portre.jpg";
import TabTitle from "./TabTitle";
import TabContent from "./TabContent";

function About() {
    const tabTitles = ["Skills", "Experience", "Education"];
    const tabContents = [
        {tabTitle: "Skills", items: [
            {title: "Unity", description: "2D, 3D, VR, Audio, Editor, Multiplayer, Gameplay, AI, Performance, UI Systems, Rendering and Visual Effects, ShaderLab"},
            {title: "C#", description: "Software Architecture, Object Oriented Programming, Design Patterns"}, 
            {title: "Blender", description: "Basic modelling and animation"}, 
            {title: "Front-End", description: "HTML, CSS, JavaScript, Bootstrap, React.js, EJS"},
            {title: "Back-End", description: "MongoDB, Express.js, SQL and NOSQL Databases"}
        ]},
        {tabTitle: "Experience", items: [
            {title: "10/2022 - Now", description: "Unity Developer - Sugar Technology"},
            {title: "06/2022 - 10/2022", description: "Game Developer - Self Employed"}
        ]},
        {tabTitle: "Education", items: [
            {title: "2015 - 2021", description: "Chemical Engineering - Ankara University"}
        ]}
    ]

    const [activeTitle, activateTitle] = React.useState("Skills");

    function setTitle(title) {
        activateTitle(title);
    }

    return (
        <div id="about">
        <div className="container">
            <div className="row">
                {/* <div className="about-col-1">
                    <img src={portre} className="portre" />
                </div> */}
                <div className="about-col-1">
                    <h1 className="sub-title">About Me</h1>
                    <p className="about-me-title">I am a Software Developer</p>
                    <p>
                        I graduated from department of Chemical Engineering at Ankara University. 
                        I met programming with MATLAB in my department. Then, I love it and I decided to improve myself in this field.
                        I started my career with Unity. I developed lots of small games and also, joined a game jam.
                        Now, I am working on RapidRender which is an interior design application for 1 year.  
                    </p>
                    <div className="tab-titles">
                        {tabTitles.map((title,index) => <TabTitle text={title} key={index} isActive={activeTitle === title ? true : false} setActive={()=> setTitle(title)}/>)}
                    </div>
                    {tabContents.map((content,index) => <TabContent key={index} isActive={content.tabTitle === activeTitle} items={content.items}/>)}

                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default About;
  