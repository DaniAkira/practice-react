import './style.css';

export default function CardSide(props) {
    const imgCT = 'assets/ct.png';
    const imgTR = 'assets/tr.png';

    return (
        <div className='card-side'>
        <img src={props.side === "CT" ? imgCT : imgTR} alt="Time"></img>
      </div>
    );
}