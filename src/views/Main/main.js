import React from 'react';
import styled from 'styled-components'

const Html = styled.div`
    background-color: grey;
    height: 600px;
`;

const Title = styled.h2`
    font-size : 1.5em;
    text-align: center;
`;

class Main extends React.Component {
    state = {users: []}
    componentDidMount(){
        fetch('/')
            .then(res => res.json())
            .then(users => this.setState( { users }));
    }
    render(){
        return ( 
            <Html>
            <div>
                <Title> 
                    List af táknmálstúlkum

                </Title>
                 <h4>
                    {
                        this.state.users.map(user => 
                        <div key= {user.id}> {user.username} </div>
                    )}
                 </h4>
            </div>
        </Html>
        );
    }
}

export default Main;
