import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PROJECT_WEBSERVER_REQUEST } from '../../store/reducers/user';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../Components/Loader"


const DetailImgZoon = styled.div`
	width: 100%; background-color: white; padding: 10px; border-radius: 25px;
`;
const ImgListData = styled.img`
	width: 100%;
`
const DataSkillFont = styled.p`
	border-top: 1px dotted;
    width: 90%;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 2;
`
const DataSkillColor = styled.span`
	font-weight: 700;
    color: tomato;
`
const WebServer = ({params}) => {
	const { webServer, loading } = useSelector(state => state.user);
	
	const dispatch = useDispatch();
			// console.log(params.id)
	useEffect(() => {
		dispatch({
            type: PROJECT_WEBSERVER_REQUEST,
            data: params.id
        });
	}, []);
	
	console.log(webServer)
	return (
		<>	
			
			{webServer == undefined
			?
				null
			: 	
				<>
					<h1 style={{ textAlign:"center" }}>WebServer</h1>
					<div style={{marginTop:"10px"}}>
						<p><DataSkillColor>Skill :</DataSkillColor> <span>{webServer.skill}</span></p>
						<DataSkillFont><DataSkillColor>Explanation :</DataSkillColor> <span>{webServer.explanation}</span></DataSkillFont>
						<DataSkillFont> <DataSkillColor>Part :</DataSkillColor> <span>{webServer.part}</span></DataSkillFont>
					</div>
				</>
			}
		</>
	)
}

export default WebServer