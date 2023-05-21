import React  from "react";
import "../../styles/styles.css";
import portre from "../../images/portre.jpg";
import TabTitle from "./TabTitle";
import TabContent from "./TabContent";

function About() {
    const tabTitles = ["Skills", "Experience", "Education"];
    const tabContents = [
        {tabTitle: "Skills", items: [
            {title: "Unity", description: "Game and app development"},
            {title: "C#", description: "Unity and .Net Library"}, 
            {title: "Blender", description: "Basic modelling and animation"}, 
            {title: "Web Development", description: "Knowledge of HTML,CSS and JavaScript"}
        ]},
        {tabTitle: "Experience", items: [
            {title: "10/2022 - Now", description: "Unity Developer - Sugar Technology"}
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
                    <p className="about-me-title">I am a Software Developer who is interested about any computer technologies.</p>
                    <p>
                        I graduated from department of Chemical Engineering at Ankara University. My developer 
                        journey started when I was an engineering student. After my graduation, I decided to learn Unity Engine. 
                        I got lots of certificates about programming and Unity. On the other hand, I finished lots of individual projects. 
                        Now, I am working on interior design application.
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
  