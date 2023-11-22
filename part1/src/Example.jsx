import React, {useState} from "react";
import './styles.css';

const Header = (course) => {
    //console.log(course)
    return (
        <>
            <h1>{course.course}</h1>
        </>
    );
}

const Part = (coursePart) => {
    //console.log(coursePart)
    return (
        <>
            <p>{coursePart.part} {coursePart.exercises}</p>
        </>
    );
}

const Content = (contentParts) => {
    //console.log(contentParts)
    return (
        <>
            <Part
                part={contentParts.parts[0].name}
                exercises={contentParts.parts[0].exercises}
            />
            <Part part={contentParts.parts[1].name}
                  exercises={contentParts.parts[1].exercises}
            />
            <Part part={contentParts.parts[2].name}
                  exercises={contentParts.parts[2].exercises}
            />
        </>
    );
}

const Total = (totalParts) => {
    //console.log(totalParts);
    const sumTotal = totalParts.parts[0].exercises + totalParts.parts[1].exercises + totalParts.parts[2].exercises;
    return (
        <>
            <p>Number of exercises {sumTotal}</p>
        </>
    );
}

const Display = ({counter}) => {
    return (
        <p>{counter}</p>
    );
}

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>the app is used by pressing the buttons</div>
        );
    }
    return (
        <div>button press history: {props.allClicks.join(' ')}</div>
    );
}

const Example = () => {
    const [ counter, setCounter ] = useState({
        value: 0, additions: 0, subtractions: 0
    });
    const [ buttonPressed, setButtonPressed ] = useState(null);
    const [ allClicks, setAll ] = useState([]);
    /*setTimeout(
        () => {
            if(counter < 100)
                setCounter(counter + 1)
        },
        1000
    );*/

    const setToLastButton = (buttonData) => {
        //console.log('last button', buttonData);
        setButtonPressed(buttonData);
    };

    const increaseByOne = () => {
        setAll(allClicks.concat('R'));
        setToLastButton('addition');
        setCounter({
            ...counter,
            value: counter.value + 1,
            additions: counter.additions + 1
        });
    };
    const decreaseByOne = () => {
        setAll(allClicks.concat('L'));
        setToLastButton('subtraction');
        setCounter({
            ...counter,
            value: counter.value - 1,
            subtractions: counter.subtractions + 1
        });
    };
    const setToZero = () => {
        setAll(allClicks.concat('0'));
        setToLastButton('reset');
        setCounter({
            ...counter,
            value: 0
        })
    };

    //console.log('rendering...', counter)

    const course = {
        name: 'Half Stack application development',
        parts: [
            {name: 'Fundamentals of React', exercises: 10},
            {name: 'Using props to pass data', exercises: 7},
            {name: 'State of a component', exercises: 14}]
    };
    return (
        <section>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
            <Display counter={counter.value}/>
            <p>Last button: {buttonPressed}</p>
            <Button onClick={decreaseByOne} text={`- minus - (${counter.subtractions})`} />
            <Button onClick={setToZero} text={'Reset'} />
            <Button onClick={increaseByOne} text={`+ plus + (${counter.additions})`} />
            <History allClicks={allClicks} />
        </section>
    );
}

export default Example;