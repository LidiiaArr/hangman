import React from 'react';
import {HangmanDrawing} from "./HangmanDrawing";
import {HangmanWord} from "./HangmanWord";
import {Keyboard} from "./Keyboard";
import WinnerComponent from "./WinnerComponent";

type MainComponentType = {
    isWinner: boolean
    incorrectLetters: string[]
    guessedLetters: string[]
    wordToGuess: string
    isLoser: boolean
    addGuessedLetter: (letter: string) => void
    restartGame: ()=> void

}
const MainComponent = (props: MainComponentType) => {
    return (
        <div>
            <div
                style={{
                    maxWidth: "800px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    margin: "0  auto",
                    alignItems: "center"
                }}
            >
                <div style={{fontSize: "2rem", textAlign: "center"}}>
                    {props.isWinner && "Winner! - Refresh to try again"}
                    {/*{isLoser && "Nice Try - Refresh to try again"}*/}
                </div>

                <HangmanDrawing numberOfGuesses={props.incorrectLetters.length}/>

                <HangmanWord
                    guessedLetters={props.guessedLetters}
                    wordToGuess={props.wordToGuess}
                    reveal={props.isLoser}
                />
                <div style={{alignSelf: "stretch"}}>
                    <Keyboard activeLetter={props.guessedLetters.filter(letter => props.wordToGuess.includes(letter))}
                              inactiveLetters={props.incorrectLetters}
                              addGuessedLetter={props.addGuessedLetter}
                              disabled={props.isLoser || props.isWinner}
                              restartGame={props.restartGame}
                    />
                </div>
            </div>
            {props.isWinner ?
                <WinnerComponent/>
                : ""}
        </div>
    );
};

export default MainComponent;