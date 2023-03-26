import React from 'react';
import styles from "./LoserComponent.module.css";

type LoserComponentPropsType ={
    restartGame: ()=> void

}
const LoserComponent = (props: LoserComponentPropsType) => {
    return (
        <div className={styles.death_background}>
            <div>
                <div className={styles.text} >You Died </div>
            </div>
            <div>
                <button className={styles.btn} onClick={props.restartGame}>Refresh</button>
            </div>
        </div>
    );
};

export default LoserComponent;