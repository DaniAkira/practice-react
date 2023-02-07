import React from "react";
import './style.css';


const grenadesArray = [

    /* MIRAGE */ 

    {
        grenadeImg : 'assets/mirage/mir-smoke-ct.jpg',
        name : 'Smoke Base CT',
        map : 'mirage',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Sem JumpThrow'    
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-jungle.jpg',
        name : 'Smoke Jungle',
        map : 'mirage',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-L.jpg',
        name : 'Smoke L meio',
        map : 'mirage',
        side : 'TR',
        bomb : 'Meio Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-janela.jpg',
        name : 'Smoke Janelão meio',
        map : 'mirage',
        side : 'TR',
        bomb : 'Meio',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Com JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-A-default.jpg',
        name : 'Smoke Default Invertida',
        map : 'mirage',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-cabecinha.jpg',
        name : 'Smoke Cabecinha',
        map : 'mirage',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-liga.jpg',
        name : 'Smoke Liga CT',
        map : 'mirage',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-mercado.jpg',
        name : 'Smoke Janela Mercado',
        map : 'mirage',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow'
    },

/* INFERNO */ 

    {
        grenadeImg : 'assets/inferno/inf-molly-nilba.jpg',
        name : 'Molotove Nilba Bomb B',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/inferno/inf-molly-tripla.jpg',
        name : 'Molotove Tripla',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Sem jumpThrow'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-ct.jpg',
        name : 'Smoke CT',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128', 
        jumpThrow : 'Sem JumpThrow',
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-3d.jpg',
        name : 'Smoke 3D',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-rua.jpg',
        name : 'Smoke Rua',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/inferno/inf-molotov-dupla.jpg',
        name : 'Molotov Dupla',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Com JumpThrow'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-biblioteca.jpg',
        name : 'Smoke Biblioteca',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Com JumpThrow'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-nip.jpg',
        name : 'Smoke Nip',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Cem JumpThrow'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-nip-arco.jpg',
        name : 'Smoke Nip Arco',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-xuxa.jpg',
        name : 'Smoke Xuxa',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },

    /* Overpass */ 

    {
        grenadeImg : 'assets/overpass/over-molly-toxico.jpg',
        name : 'Molotove Tóxico Bomb B',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-banco.jpg',
        name : 'Smoke Banco Bomb A',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-ceu.jpg',
        name : 'Smoke Céu Bomb B',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-lixeira.jpg',
        name : 'Smoke Lixeira Bomb A',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow'
    },
    {
        grenadeImg : 'assets/overpass/over-molotov-caminhao.jpg',
        name : 'Molotove Caminhão',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Com JumpThrow'
    },
    {
        grenadeImg : 'assets/overpass/over-molotov-sem-saida.jpg',
        name : 'Molotove Sem Saída',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-ponte.jpg',
        name : 'Smoke Ponte',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-sapao.jpg',
        name : 'Smoke Sapão',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Com JumpThrow'
    },

];


export const MapMainSection = (props) => (
        <section className="map-main-section">
        {
            grenadesArray.filter(grenade => (
                grenade.map === props.map
            )).map(grenade => (
                <div className="grenade-card">
                    <div className="img-grenade">
                        <img src={grenade.grenadeImg}></img>
                    </div>
                    <div className="infos-area">
                        <h2>{grenade.name}</h2>
                        <div className="infos">
                            <div className="info">
                                <div className="circle"></div>
                                <p>{grenade.bomb}</p>
                            </div> 
                            <div className="info">
                                <div className="circle"></div>
                                <p>{grenade.side}</p>
                            </div> 
                            <div className="info">   
                                <div className="circle"></div>
                                <p>{grenade.tickRate}</p>
                            </div>
                            <div className="info">
                                <div className="circle"></div>
                                <p>{grenade.jumpThrow}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        </section>
    )
        

