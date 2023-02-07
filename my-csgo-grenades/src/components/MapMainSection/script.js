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
        jumpThrow : 'Sem JumpThrow',
        spot : 'base ct',
        spotThrow : 'Da caverna TR'    
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-jungle.jpg',
        name : 'Smoke Jungle',
        map : 'mirage',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'jungle',
        spotThrow : 'Da caverna TR'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-L.jpg',
        name : 'Smoke L meio',
        map : 'mirage',
        side : 'TR',
        bomb : 'Meio Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'l meio',
        spotThrow : 'Da carroça'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-janela.jpg',
        name : 'Smoke Janelão meio',
        map : 'mirage',
        side : 'TR',
        bomb : 'Meio',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Com JumpThrow',
        spot : 'janela',
        spotThrow : 'Da base TR'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-A-default.jpg',
        name : 'Smoke Default Invertida',
        map : 'mirage',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'default',
        spotThrow : 'Da caverna TR'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-cabecinha.jpg',
        name : 'Smoke Cabecinha',
        map : 'mirage',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'cabecinha',
        spotThrow : 'Da caverna TR'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-liga.jpg',
        name : 'Smoke Liga CT',
        map : 'mirage',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'ligação',
        spotThrow : 'Da TV'
    },
    {
        grenadeImg : 'assets/mirage/mir-smoke-mercado.jpg',
        name : 'Smoke Janela Mercado',
        map : 'mirage',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow',
        spot : 'janela mercado',
        spotThrow : 'Do tapete'
    },

/* INFERNO */ 

    {
        grenadeImg : 'assets/inferno/inf-molly-nilba.jpg',
        name : 'Molotove Nilba',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'nilba',
        spotThrow : 'Da banana'
    },
    {
        grenadeImg : 'assets/inferno/inf-molly-tripla.jpg',
        name : 'Molotove Tripla',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Sem jumpThrow',
        spot : 'tripla',
        spotThrow : 'Da banana'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-ct.jpg',
        name : 'Smoke CT',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128', 
        jumpThrow : 'Sem JumpThrow',
        spot : 'base ct',
        spotThrow : 'Da banana',
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-3d.jpg',
        name : 'Smoke 3D/Caixão',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'caixão',
        spotThrow : 'Da Banana'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-rua.jpg',
        name : 'Smoke Rua',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'rua',
        spotThrow : 'Do MF'
    },
    {
        grenadeImg : 'assets/inferno/inf-molotov-dupla.jpg',
        name : 'Molotov Dupla',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Com JumpThrow',
        spot : 'dupla',
        spotThrow : 'Da banana'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-biblioteca.jpg',
        name : 'Smoke Biblioteca',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'biblioteca',
        spotThrow : 'Do MF'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-nip.jpg',
        name : 'Smoke Nip',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Cem JumpThrow',
        spot : 'nip',
        spotThrow : 'Do meio'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-nip-arco.jpg',
        name : 'Smoke Nip Arco',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow',
        spot : 'arco',
        spotThrow : 'Do MF'
    },
    {
        grenadeImg : 'assets/inferno/inf-smoke-xuxa.jpg',
        name : 'Smoke Xuxa',
        map : 'inferno',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'xuxa',
        spotThrow : 'Do meio'
    },

    /* Overpass */ 

    {
        grenadeImg : 'assets/overpass/over-molly-toxico.jpg',
        name : 'Molotove Tóxico',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'tóxico',
        spotThrow : 'esgoto'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-banco.jpg',
        name : 'Smoke Banco',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow',
        spot : 'cabecinha',
        spotThrow : 'Da rua'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-ceu.jpg',
        name : 'Smoke Céu',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow',
        spot : 'cabecinha',
        spotThrow : 'Do esgoto'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-lixeira.jpg',
        name : 'Smoke Lixeira',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Com JumpThrow',
        spot : 'cabecinha',
        spotThrow : 'Da rua'
    },
    {
        grenadeImg : 'assets/overpass/over-molotov-caminhao.jpg',
        name : 'Molotove Caminhão',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb A',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Com JumpThrow',
        spot : 'cabecinha',
        spotThrow : 'Da rua'
    },
    {
        grenadeImg : 'assets/overpass/over-molotov-sem-saida.jpg',
        name : 'Molotove Sem Saída',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'sem saída',
        spotThrow : 'Do esgoto'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-ponte.jpg',
        name : 'Smoke Ponte',
        map : 'overpass',
        side : 'TR',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 64/128',
        jumpThrow : 'Sem JumpThrow',
        spot : 'ponte',
        spotThrow : 'Do esgoto'
    },
    {
        grenadeImg : 'assets/overpass/over-smoke-sapao.jpg',
        name : 'Smoke Sapão',
        map : 'overpass',
        side : 'CT',
        bomb : 'Bomb B',
        tickRate : 'Tickrate 128',
        jumpThrow : 'Com JumpThrow',
        spot : 'sapão',
        spotThrow : 'Da base ct'
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
                                <p>{grenade.spotThrow}</p>
                            </div>
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
        

