import './style.css';

export default function CardInfo(props) {
    let nameSideCT = "CT";
    let nameSideTR = "TR";
    let infoSideCT = "A equipe Contra-Terrorista tem o objetivo de proteger os bomb-sites e desarmar a bomba caso seja armada. Também pode eliminar todos os 5 inimigos Terroristas para ganhar o round.";
    let infoSideTR = "A equipe Terrorista tem o objetivo de armar a bomba e proteger sua explosão. Também pode eliminar todos os 5 inimigos Contra-Terroristas antes do tempo acabar para ganhar o round.";
    
 
    return (
        <div className='card-info'>
        <h3>Informação sobre o {props.side === "CT" ? nameSideCT : nameSideTR}</h3>
        <p>{props.side === "CT" ? infoSideCT : infoSideTR}</p>
      </div>
    );
}