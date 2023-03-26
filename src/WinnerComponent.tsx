import React from 'react';
import styles from "./WinnerComponent.module.css";
import react from "./icons/React-icon.svg.png"
import html from "./icons/HTML5_logo_and_wordmark.svg.png"
import css from "./icons/1452px-CSS3_logo_and_wordmark.svg.png"
import figma from "./icons/Figma-logo.svg.png"
import js from "./icons/JavaScript-logo.png"
import ts from "./icons/Typescript_logo_2020.svg.png"
import storybook from "./icons/storybook.png"
import redux from "./icons/Redux.png"
import git from "./icons/Git-logo.svg.png"
import jest from "./icons/jest.png"
import mui from "./icons/mui.png"
import docker from "./icons/vertical-logo-monochromatic.webp"
const WinnerComponent = () => {
    return (
            <div className={styles.snowflakes}>
                <div className={styles.snowflake}><img
                    src={react}
                    style={{maxWidth: "45px"}}/></div>
                <div className={styles.snowflake}><img
                    src={html}
                    style={{maxWidth: "45px"}}/></div>
                <div className={styles.snowflake}><img
                    src={css}
                    style={{maxWidth: "45px"}}/></div>
                <div className={styles.snowflake}><img
                    src={figma}
                    style={{maxWidth: "30px"}}/></div>
                <div className={styles.snowflake}><img
                    src={js}
                    style={{maxWidth: "45px"}}/>
                </div>
                <div className={styles.snowflake}><img
                    src={ts}
                    style={{maxWidth: "45px"}}/></div>
                <div className={styles.snowflake}><img
                    src={storybook}
                    style={{maxWidth: "45px"}}/></div>
                <div className={styles.snowflake}><img
                    src={redux}
                    style={{maxWidth: "45px"}}/></div>
                <div className={styles.snowflake}><img
                    src={git}
                    style={{maxWidth: "45px"}}/></div>
                <div className={styles.snowflake}><img src={mui}
                                                       style={{maxWidth: "45px"}}/>
                </div>
                <div className={styles.snowflake}><img
                    src={jest}
                    style={{maxWidth: "45px"}}/></div>
                <div className={styles.snowflake} ><img
                    src={docker}
                    style={{maxWidth: "45px"}}
                    onClick={()=>{alert("you are fast and curious")}}
                 /></div>
                {/*<div className={styles.snowflake}><img*/}
                {/*    src="https://www.freepnglogos.com/uploads/linux-png/linux-logo-logo-brands-for-0.png"*/}
                {/*    style={{maxWidth: "45px"}}/></div>*/}
        </div>
    );
};

export default WinnerComponent;