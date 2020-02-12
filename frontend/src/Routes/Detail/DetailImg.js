import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PROJECT_IMG_REQUEST } from '../../store/reducers/user';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../Components/Loader"


const DetailImgZoon = styled.div`
	width: 100%; background-color: white; padding: 10px; border-radius: 25px; text-align: center;
`;
const ImgListData = styled.img`
	width: 50%;
`
const MobileImgListData = styled.img`
	width: 100%;
`
const ImgListData1 = styled.img`
	width: 100%;
`
const DetailImg = ({params}) => {
	const { architecture, loading } = useSelector(state => state.user);
	
	const dispatch = useDispatch();
			
	useEffect(() => {
		dispatch({
            type: PROJECT_IMG_REQUEST,
            data: params.id
        });
	}, []);
	
	return (
		<>	
			{window.outerWidth < 480 
			?
				<>
					{architecture.length > 0
					? 	<DetailImgZoon>
							{params.id === "스마트펙토리" ?
								<MobileImgListData src= {architecture != null ? require('../../assets/' + `${architecture}`) : require("../../assets/noPosterSmall.png")} style={{white:"100%"}}/>
							: <MobileImgListData src= {architecture != null ? require('../../assets/' + `${architecture}`) : require("../../assets/noPosterSmall.png")}/>
							}
							
						</DetailImgZoon>
				 	: null
					}
				</>
			: 
				<>
					{architecture.length > 0
					? 	<DetailImgZoon>
							{params.id === "스마트펙토리" ?
								<ImgListData1 src= {architecture != null ? require('../../assets/' + `${architecture}`) : require("../../assets/noPosterSmall.png")} style={{white:"100%"}}/>
							: <ImgListData src= {architecture != null ? require('../../assets/' + `${architecture}`) : require("../../assets/noPosterSmall.png")}/>
							}
							
						</DetailImgZoon>
				 	: null
					}
				</>
			}
		</>
	)
}

export default DetailImg