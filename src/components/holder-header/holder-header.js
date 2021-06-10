const HolderHeader = ()=> {
    const addCardHandler = ()=> {
        console.log('Card handler invoked')
    }
    return (
        <button onClick={addCardHandler}>+</button>
    )
}
export default HolderHeader