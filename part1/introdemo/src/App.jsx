// react component with the name App
const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <p>Hola {props.name}, tienes {props.age} años.</p>
        </div>
    )
}

const App = () => {
    const name = "Jaime"
    const age = 21
    const now = new Date()
    const a = 10
    const b = 20
    console.log(a+b)
    
    return (
        <div>
        <p>Hello world, the date is {now.toString()}</p>
        <p>
            {a} plus {b} is {a+b}
        </p>

        <br/>
        <Hello name={name} age={age}/>
        <Hello name="Gabriela" age={10+12}/>
        <Hello/>
        <br/>
        </div>
    )
}

export default App