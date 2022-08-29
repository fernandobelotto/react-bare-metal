import useCounter from './useCounter'

export default function Counter() {

    const { counter, increase } = useCounter()

    return (
        <>
            <h4>{counter}</h4>
            <button onClick={increase}>aumentar</button>
        </>
    )
}