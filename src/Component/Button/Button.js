import React from 'react'

export default function Button(props) {
    return (
        <>
            <button className='btn btn-info text-white px-3 py-2 rounded-0'>{props.text}</button>
        </>
    )
}
