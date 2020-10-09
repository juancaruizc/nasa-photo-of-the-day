import React from 'react'
import styled from 'styled-components'


const StyledPicture = styled.div`
    width:50%;
    height:50%;
`


const Picture = (props) => {
    const {theme} = props
    return (
        <StyledPicture>
            <img src = {props.nasaData.url} />
        </StyledPicture>
    )
}

export default Picture