import React from "react"; 
import styled from 'styled-components'

const fuck = styled.div`
    max-width: 1010px;
    padding: 5px 1px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;  
`;

class Footer extends React.Component{
    render(){
        return (
                <footer>
                    <fuck>footer</fuck>
                </footer>
                
            );
    }
}

export default Footer;