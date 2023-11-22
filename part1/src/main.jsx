import ReactDOM from 'react-dom/client'
import Example from "./Example.jsx";
import Unicafe from './Unicafe.jsx'
import Anecdotes from "./Anecdotes.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Example />
        <Unicafe/>
        <Anecdotes />
    </>
);