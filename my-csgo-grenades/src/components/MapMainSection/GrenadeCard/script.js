import React from "react";


const mirageGrenadesArray = [
    {
        grenadeImg : 'assets/mirage/mir-smoke-ct.jpg',
        spot : 'Smoke Base CT Bomb A',
        map : 'mirage',
        side : 'Ct',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-jungle.jpg',
        spot : 'Smoke Jungle Bomb A',
        map : 'mirage',
        side : 'TR',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-L.jpg',
        spot : 'Smoke L meio',
        map : 'mirage',
        side : 'TR',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-janela.jpg',
        spot : 'Smoke Janelão meio',
        map : 'mirage',
        side : 'TR',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Com JumpThrow'
    },
];


export const GrenadeCard = () => {
    return(
    <div className="grenade-card">
        {   
            mirageGrenadesArray.map(grenade => (
                <div className="grenade-infos">
                    <div className="img-grenade">
                        <img src={grenade.grenadeImg}></img>
                    </div>
                    <div className="infos-area">
                        <p>{grenade.spot}</p>
                        <div className="infos">
                            <div className="circle"></div>
                            <p>{grenade.side}</p>
                            <p>{grenade.tickRate}</p>
                            <p>{grenade.jumpThrow}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
)}

