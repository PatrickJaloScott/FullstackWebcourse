import React from "react";
import {useState} from 'react';

const Button = (props) => {
    return (
        <button onClick={props.clickHandler}>{props.text}</button>
    );
};

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td><td>{props.value}</td>
        </tr>
    );
}

const StatisticsDisplay = (props) => {
    //console.log(props);
    const data = props.data;
    //console.log(data);
    const total = data.good + data.neutral + data.bad;
    //console.log(total);
    const average = (data.good - data.bad) / total;
    const positivePercent = 100 * data.good / total;

    if (total === 0) {
        return (
            <>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </>
        );
    }

    return (
        <>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <StatisticLine text={'good'} value={data.good}/>
                    <StatisticLine text={'neutral'} value={data.neutral}/>
                    <StatisticLine text={'bad'} value={data.bad}/>
                    <StatisticLine text={'all'} value={total}/>
                    <StatisticLine text={'average'} value={average}/>
                    <StatisticLine text={'positive'} value={positivePercent + '%'}/>
                </tbody>
            </table>
        </>
    );
}

const Unicafe = () => {
    const [statistics, setStatistics] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const increaseGood = () => {
        setStatistics({
            ...statistics,
            good: statistics.good + 1
        });
    };
    const increaseNeutral = () => {
        setStatistics({
            ...statistics,
            neutral: statistics.neutral + 1
        });
    };
    const increaseBad = () => {
        setStatistics({
            ...statistics,
            bad: statistics.bad + 1
        });
    };

    return (
        <section>
            <h1>Unicafe</h1>
            <h2>Give Feedback</h2>
            <Button clickHandler={increaseGood} text={'good'}/>
            <Button clickHandler={increaseNeutral} text={'neutral'} />
            <Button clickHandler={increaseBad} text={'bad'} />
            <StatisticsDisplay data={statistics} />
        </section>
    );
}

export default Unicafe;