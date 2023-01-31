import './style.css';


export default function Header(props) {
    return (
        <header>
            <h1>CS:GO Times</h1>
            <p>Click no botão para alterar os times</p>
            <button onClick={props.clickSawpTeam}>Mudar Time</button>
        </header>
    )
}