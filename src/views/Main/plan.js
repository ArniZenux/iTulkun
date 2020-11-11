import React from 'react';
import styled from 'styled-components'

const Title = styled.h2`
    font-size : 1.5em;
    text-align: center;
`;


class Plan extends React.Component{
    render(){
        return (
            <Title>Dagbók túlka</Title>
        );
    } 
}

export default Plan;