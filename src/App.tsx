import React, {useCallback, useEffect, useState} from 'react';
import words from "./wordList.json"
import {HangmanDrawing} from "./HangmanDrawing";
import {HangmanWord} from "./HangmanWord";
import {Keyboard} from "./Keyboard";
import styles from "./App.module.css";
import LoserComponent from "./LoserComponent";
import WinnerComponent from "./WinnerComponent";
import MainComponent from "./MainComponent";

function App() {
    const [wordToGuess, setWordToGuess] = useState<string>(() => {
        return words[Math.floor(Math.random() * words.length)]
    })

    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
    //не правильные буквы

    const isLoser = incorrectLetters.length >= 6
    const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isLoser || isWinner) return
        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters])

    useEffect(() => {
        document.title = 'HANGMAN';

        const handler = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase()
            if (!key.match(/^[a-z]$/)) return

            e.preventDefault()
            addGuessedLetter(key)
        }
        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [guessedLetters])

    const restartGame = () => {
        setWordToGuess(words[Math.floor(Math.random() * words.length)])
        setGuessedLetters([])
    }


    return (
        <>
            {isLoser
                ? <LoserComponent
                    restartGame={restartGame}
                />
                : ""
            }
            <MainComponent
                isWinner={isWinner}
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}
                isLoser={isLoser}
                addGuessedLetter={addGuessedLetter}
                incorrectLetters={incorrectLetters}
                restartGame={restartGame}
            />
            {/*<div*/}
            {/*    style={{*/}
            {/*        maxWidth: "800px",*/}
            {/*        display: "flex",*/}
            {/*        flexDirection: "column",*/}
            {/*        gap: "2rem",*/}
            {/*        margin: "0  auto",*/}
            {/*        alignItems: "center"*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <div style={{fontSize: "2rem", textAlign: "center"}}>*/}
            {/*        {isWinner && "Winner! - Refresh to try again"}*/}
            {/*        /!*{isLoser && "Nice Try - Refresh to try again"}*!/*/}
            {/*    </div>*/}

            {/*    <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>*/}

            {/*    <HangmanWord*/}
            {/*        guessedLetters={guessedLetters}*/}
            {/*        wordToGuess={wordToGuess}*/}
            {/*        reveal={isLoser}*/}
            {/*    />*/}
            {/*    <div style={{alignSelf: "stretch"}}>*/}
            {/*        <Keyboard activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))}*/}
            {/*                  inactiveLetters={incorrectLetters}*/}
            {/*                  addGuessedLetter={addGuessedLetter}*/}
            {/*                  disabled={isLoser || isWinner}*/}
            {/*                  restartGame={restartGame}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*{isWinner ?*/}
            {/*    <WinnerComponent/>*/}
            {/*    : ""}*/}

        </>
    )
}

export default App;
