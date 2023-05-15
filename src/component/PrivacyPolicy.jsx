import React from "react";

function PrivacyPolicy() {
    return <>
        <iframe
            src= {`${process.env.PUBLIC_URL}/privacy-policy.html`}
            title="Klondike Solitaire"
            width="100%"
            height="2000"
            allowFullScreen = {false}
            style={{border: "none", background: "white"}}
        />
    </>
}

export default PrivacyPolicy;