import { memo } from "react"
import { useState } from "react"


export default function Example2() {


    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(1)

    const handleClick = () => setCounter2(counter2 + 1)

    // MyComponent dont depend on counter2, but without memo, he will be rerender if without the memo function
    return (
        <>

            <MyComponent value={counter} />
            <h4>counter 2 is {counter2}</h4>
            <button onClick={handleClick}>increase</button>
        </>
    )

}

// try to remove the memo function and check the browser console!
const MyComponent = memo(({value}) => {

    console.log(`MyComponent is rendering value is ${value}`)

    return (
        <>
            <h4>counter is {value}</h4>
        </>
    )
})