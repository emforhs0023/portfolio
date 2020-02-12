import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cover = styled.div`
	width:100%;
	background-image: url(${props => props.bgImage});
	background-position: center center;
	background-size:cover;
	height:400px;
	background-size: 100% 100%;


`;
const ImgZoon = styled.div`
    border-radius: 38px;
    border: 3px solid black;
    width: 15%;
    text-align: center;
    position: relative;
    top: 340px;
    color: white;
    float: right;
    margin-right: 10px;
    background-color: black;
`;

const HomeImgList = ({img, title}) => {
    return  (
		<>
			<Cover bgImage={require('../../assets/' +`${img}`)}>
				<ImgZoon>
					<Link to={title ? `/${title}` : `/${title}`}>
						<h1>MORE ></h1>
					</Link>
				</ImgZoon>
			</Cover>
		</>
	)
}

export default HomeImgList