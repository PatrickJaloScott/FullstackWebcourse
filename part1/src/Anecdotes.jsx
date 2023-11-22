import {useState} from "react";

const Button = (props) => {
    return (
        <button onClick={props.clickHandler}>{props.text}</button>
    );
}

const AnecdoteSection = (props) => {
    //console.log(props)
    return (
        <>
            <h2>{props.header}</h2>
            <p><i>"{props.anecdote}"</i></p>
            <p>has {props.votes} votes</p>
        </>
    );
}

const Anecdotes = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ];

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(Array(8).fill(0));
    const [ mostVoted, setMostVoted ] = useState(0);

    const getRandomQuote = () => {
        const rand = Math.floor(Math.random() * anecdotes.length);
        //console.log(rand);
        setSelected(rand);
        setPoints(points);
    }

    const voteForQuote = () => {
        //console.log('current: ', currentSelection);
        setPoints(points);
        setMostVoted(points.indexOf(Math.max(...points)));
        const copy = [...points];
        copy[selected] += 1;
        setPoints(copy);
        //console.log(points, copy);
        setPoints(copy);
        setMostVoted(points.indexOf(Math.max(...points)));
    }

    return (
        <section>
            <AnecdoteSection
                header={'Anecdote of the day'}
                anecdote={anecdotes[selected]}
                votes={points[selected]} />
            <Button clickHandler={voteForQuote} text={'vote'} />
            <Button clickHandler={getRandomQuote} text={'next anecdote'} />
            <AnecdoteSection
                header={'Anecdote with the most votes'}
                anecdote={anecdotes[mostVoted]}
                votes={points[mostVoted]} />
        </section>
    );
}

export default Anecdotes;