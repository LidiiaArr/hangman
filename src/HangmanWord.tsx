type HangmanWordPropsType = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord(props: HangmanWordPropsType) {

    return <div style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
        {props.wordToGuess.split("").map((letter, index) => (
            <span style={{borderBottom: ".1em solid black"}} key={index}>
                <span
                    style={{
                        visibility: props.guessedLetters.includes(letter) || props.reveal
                            ? "visible"
                            : "hidden",
                        color: !props.guessedLetters.includes(letter) && props.reveal ? "red" : "black"
                    }}
                >{letter}</span></span>))}
    </div>
}