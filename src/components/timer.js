import React, { useEffect, useState } from 'react'

const Timer = ({ pomodoroLength, breakLength }) => {

    const initialValues = {
        minutes: (pomodoroLength === undefined ? 0 : pomodoroLength),
        seconds: 0,
        cycles: 0
    }

    const [pomodoroState, setPomodoroState] = useState(initialValues)
    const [isRunning, setIsRunning] = useState(false)
    const [isBreak, setIsBreak] = useState(false)

    useEffect(() => {
        let interval = null

        if (isRunning) {
            if (!(pomodoroState.minutes === 0 && pomodoroState.seconds === 0)) {
                interval = setInterval(() => {
                    const minutes = (pomodoroState.seconds === 0 && pomodoroState.minutes > 0)
                        ? pomodoroState.minutes - 1
                        : pomodoroState.minutes
                    const seconds = pomodoroState.seconds > 0
                        ? pomodoroState.seconds - 1
                        : 59
                    changeTimeValues(minutes, seconds)

                }, 1000)
            } else {
                if (!isBreak) {
                    alert(`Time's up motherfucker!`)
                    setIsBreak(true)
                    changeTimeValues(breakLength, 0)
                } else {
                    setIsBreak(false)
                    changeTimeValues(pomodoroLength)
                }
            }
        } else if (!isRunning && (pomodoroState.minutes !== 0 || pomodoroState.seconds !== 0)) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isRunning, pomodoroState, isBreak, breakLength, pomodoroLength])

    const handleStartClick = (e) => {
        e.preventDefault()
        setIsRunning(true)
    }

    const handlePauseClick = (e) => {
        e.preventDefault()
        setIsRunning(false)
    }

    const handleResetClick = (e) => {
        e.preventDefault()
        setPomodoroState(initialValues)
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



    return (
        <div>
            <h2>{timerString()}</h2>
            <button onClick={handleStartClick}>Start</button>
            <button onClick={handlePauseClick}>Pause</button>
            <button onClick={handleResetClick}>Reset</button>
            <p>Cycles: {pomodoroState.cycles}</p>
        </div>
    )
}

export default Timer