import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardPropsType = {
    activeLetter: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled: boolean
}

export function Keyboard(props: KeyboardPropsType) {
    return <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem"
    }}>
        {KEYS.map(key => {
            const isActive = props.activeLetter.includes(key)
            const isInactive = props.inactiveLetters.includes(key)
            return (
                <button
                    onClick={() => props.addGuessedLetter(key)}
                    className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
                    key={key}
                    disabled={isActive || isInactive || props.disabled}
                >
                    {key}
                </button>
            )
        })}
    </div>
}