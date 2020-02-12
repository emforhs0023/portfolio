import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import Loader from "./Loader";

const Container = styled.div`
    font-size:12px;
`;


// background-image: url(${props => });
const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height:180px;
    background-size:cover;
    border-radius:4px;
    background-position: center center;
    transition:opacity 0.1s linear;
`;

const Rating = styled.span`
    bottom:5px;
    right:5px;
    position: absolute;
    opacity:0;
    transition:opacity 0.1s linear;
`;
const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover{
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1; 
        }
    }
`;

const Title = styled.span`
    display: block;
    font-size:12px;
    margin-bottom: 3px;
`;

const Year = styled.span`
    font-size:10px;
    color:rgba(255, 255, 255, 0.5);
`;

const Poster = ({seq, id, imageUrl, title}) => {
    const { loading } = useSelector(state => state.user);
    console.log(imageUrl)
    return (
        <>  
        {loading == true ? <Loader/> :
        <Link to={id === "Homepage" ? "/page" : `/${id}`}>
        	<div>
                <Container>
                    <ImageContainer>
                       <Image bgUrl={imageUrl ? require('../assets/' +`${imageUrl}`) : require("../assets/noPosterSmall.png")}/> 
                    </ImageContainer>
                    <Title>{title}</Title>
                </Container>
        	</div>
        </Link>
        }
        </>
    )
}

Poster.propTypes = {
    	
};

export default Poster;