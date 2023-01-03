import React from 'react';

export default function LinkItem(props) {
    return (
        <div className={`list-item`}>
            <div className={`point`}>
                <span>{props.points}</span>
                <span>points</span>
            </div>
            <div className={`info`}>
                <div>
                    <h4 className={`title`}>{props.name}</h4>
                    <span>merhaba</span>
                </div>
                <div className={'vote'}>
                    <button onClick={() => props.onIncreaseClick(props.id)}>+ up vote</button>
                    <button onClick={() => props.onDecreaseClick(props.id)} style={{marginLeft:'8px'}}>- down vote</button>
                </div>
            </div>
        </div>
    )

}
