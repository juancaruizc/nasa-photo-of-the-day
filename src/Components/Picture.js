import React from 'react'

const Picture = (props) => {
    
    return (
        <div>
            <img src = {props.nasaData.url} />
        </div>
    )
}

export default Picture