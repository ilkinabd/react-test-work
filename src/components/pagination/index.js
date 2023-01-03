import React from 'react';

export default function Pagination(props){
    const count = Math.ceil(props.total / props.perPage)
    const renderPagination = () =>{
        const pagination = []
        for (let i = 1; i <= count; i++) {
            const isActive = i === props.current
            pagination.push(
                <button key={i} className={isActive ? 'active':''} disabled={isActive} onClick={() => props.onClick(i)}>
                    {i}
                </button>
            )
        }
        return pagination
    }
    return (
        <div className={`pagination`}>
            <button disabled={props.current === 1} onClick={() => props.onClick(props.current - 1)}>{`<`}</button>
            {renderPagination()}
            <button disabled={props.current === count} onClick={() => props.onClick(props.current + 1)}>{`>`}</button>
        </div>
        )
}