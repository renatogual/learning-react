import React, { useState } from 'react'

export const useCounter = (initialValue=0) => {
    const [counter, setCounter] = useState(initialValue)

    function inc() {
        return setCounter(counter + 1)
    }

    function dec() {
        return setCounter(counter - 1)
    }

    return [counter, inc, dec]
}