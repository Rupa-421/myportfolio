import styled from 'styled-components';

export const SkillsContainer = styled.div`
margin: 50px 0 50px 0;
`;

export const SkillsHeader = styled.h1`
 font-size: clamp(2rem, 2.5vw, 3rem);
 text-align: center;
 font-family: "Raleway", sans-serif;
 color:#173b6c;
 margin: 0 0 20px 0;
`
export const SkillsContent= styled.div`
 display:flex;
 flex-wrap:wrap;
 justify-content: center;
 margin: 0 auto;
`

export const SkillName = styled.span`
 font-weight: 600;
 text-transform: uppercase;
 font-family: "Poppins", sans-serif;
 padding: 10px 0;
`

export const SkillsWrapper = styled.div`
 margin: 0 2rem;
 width:30vw;
 
`
export const ProgressbarWrap =styled.div`
width:100%;
border:1px solid black;
background-color:#dce8f8;
margin:0 0 6px 0;
`

export const Progress =styled.div`
background-color:#149ddd;
height:10px;
 width: ${props => props.width}%;

`