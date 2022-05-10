import React, {useState} from 'react';
import './Card.css';
import fes_data from './card_sample.js';
import * as RiIcons from 'react-icons/ri';
import { IconContext } from 'react-icons';

function Card(){

    let [fes, set_fes] = useState(fes_data);

    return (
        <div class="outer">
            <div class="div-card">
            {
                fes.map(function(fes_data, i){
                    return <Item fes={fes[i]} idx={fes[i].id} key={i} />
                })
            }
            </div>
        </div>
    )
}

function Item(props){
    return (
        <div class="card-inner" onClick={()=>{alert('a')} }>
            <IconContext.Provider value={{ color: 'gray' }}>
            <img class="card-img" src={props.fes.img}/>
            <div class="card-info">
                <div class="card-info-left">
                    <span class="card-title">{props.fes.title}</span>
                    <div class="card-info-inner">
                        <RiIcons.RiMapPin2Fill class=""/>
                        <span class="card-map card-text">{props.fes.address4} |</span>
                        <span class="card-organizer card-text">{props.fes.organizer}</span>
                    </div>
                    
                        {
                            props.fes.hashtag.map(function(hash, i){
                                return (
                                    <span class="card-hashtag">
                                        {"#"+hash}
                                    </span>
                            )})
                        }
                    
                </div>
                <div class="card-info-right">
                    <div>
                        <span class="card-info-love">{"♡ 0"}</span>
                    </div>
                    <div>
                        <span class="card-price">예상 예약가 {props.fes.price}원</span>
                    </div>
                    
                    
                </div>
            </div>
            </IconContext.Provider>
        </div>
    )

}

export default Card;
