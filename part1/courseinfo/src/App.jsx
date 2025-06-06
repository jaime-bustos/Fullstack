const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <div>
        
        <p>{props.part.name} {props.part.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.exercises[0].exercises+
            props.exercises[1].exercises+
            props.exercises[2].exercises} </p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
            name: 'State of a component',
            exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total exercises={course.parts}/>
        </div>
    )
}

export default App
