import React, { useState } from 'react'

const Timer = ({ pomodoroLength }) => {

    const initialValues = {
        minutes: (pomodoroLength === undefined ? 0 : pomodoroLength),
        seconds: 0,
        cycles: 0
    }

    const [pomodoroState, setPomodoroState] = useState(initialValues)
    const [isRunning, setIsRunning] = useState(false)

    const handleStartClick = (e) => {
        e.preventDefault()
        setIsRunning(true)
        console.log('Start')
    }

    const handlePauseClick = (e) => {
        e.preventDefault()
        setIsRunning(false)
        console.log('Pause')
    }

    const handleResetClick = (e) => {
        e.preventDefaul()
        setPomodoroState({
            minutes: pomodoroLength,
            seconds: 0,
            cycles: 0
        })
        console.log('Reset')
    }

    const timerString = () => {
        const mins = pomodoroState.minutes >= 10 ? `${pomodoroState.minutes}` : `0${pomodoroState.minutes}`
        const secs = pomodoroState.seconds >= 10 ? `${pomodoroState.seconds}` : `0${pomodoroState.seconds}`

        return `${mins}:${secs}`
    }

    return(
        <div>
            <p>{timerString()}</p>
            <button onClick = {handleStartClick}>Start</button>
            <button onClick = {handlePauseClick}>Pause</button>
            <button onClick = {handleResetClick}>Reset</button>
            <p>Cycles: {pomodoroState.cycles}</p>
        </div>
    )
}

export default Timer