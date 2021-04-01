import React, { useState } from 'react'

const Timer = ({ pomodoroLength }) => {

    const initialValues = {
        minutes: (pomodoroLength === undefined ? 0 : pomodoroLength),
        seconds: 0,
        cycles: 0
    }

    console.log(pomodoroLength)

    const [pomodoroState, setPomodoroState] = useState(initialValues)
    const [isRunning, setIsRunning] = useState(false)

    const handleStartClick = (e) => {
        e.preventDefault()
        setIsRunning(true)
        console.log('Start')
        setInterval(() => {
            countdown()
        }, 1000)
    }

    const handlePauseClick = (e) => {
        e.preventDefault()
        setIsRunning(false)
        console.log('Pause')
        clearInterval()
    }

    const handleResetClick = (e) => {
        e.preventDefault()
        setPomodoroState(initialValues)
        console.log('Reset')
    }

    const changeTimeValues = (minutes, seconds) => {
        setPomodoroState(prevValues => ({
            ...prevValues,
            minutes: minutes,
            seconds: seconds
        }))
    }

    const timerString = () => {
        const mins = pomodoroState.minutes >= 10 ? `${pomodoroState.minutes}` : `0${pomodoroState.minutes}`
        const secs = pomodoroState.seconds >= 10 ? `${pomodoroState.seconds}` : `0${pomodoroState.seconds}`

        return `${mins}:${secs}`
    }

    const countdown = () => {
        if (isRunning) {
            const minutes = (pomodoroState.seconds === 0 && pomodoroState.minutes > 0) 
                ? pomodoroState.minutes - 1 
                : pomodoroState.minutes
            const seconds = pomodoroState.seconds > 0 
                ? pomodoroState.seconds - 1 
                : 60

            changeTimeValues(minutes, seconds)
        }
    }

    return(
        <div>
            <h2>{timerString()}</h2>
            <button onClick = {handleStartClick}>Start</button>
            <button onClick = {handlePauseClick}>Pause</button>
            <button onClick = {handleResetClick}>Reset</button>
            <p>Cycles: {pomodoroState.cycles}</p>
        </div>
    )
}

export default Timer