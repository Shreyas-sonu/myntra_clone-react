import styled from "styled-components";

export const ContainerDiv = styled.div`
margin:10px;
display:grid;
grid-template-columns: repeat(5,1fr);
gap:30px;
@media (max-width: 768px) and (min-width: 350px)
{
  grid-template-columns : repeat(2,1fr);
};

@media (max-width: 350px)
{
  grid-template-columns : repeat(1,1fr);
}
` 

export let MainDiv = styled.div`
  width: 210px;
 /* border: 1px solid black; */
  height: 307.8px;
  cursor:pointer


`;


export let CardDiv = styled.div`
  ${'' /* border: 1px solid red; */}
  height: ${props=>props.flag?"230px":"250px"};
  width: 210px;
  ${'' /* background: yellow; */};
  cursor:pointer

`;

export let DescDiv = styled.div`
  ${'' /* border: 1px solid blue; */}
  width: 210px;
  height: ${props=>props.flag?"77.8px":"57.8px"};
  ${'' /* background: red; */};
  cursor:pointer

`;

export const CountryDiv=styled.div`
border-radius:10px;
height:20px;
align-self:center;
align-items:center;
background:${props => props.flag ? "whitesmoke" : "white"};
cursor:pointer

`
export const BundlesDiv = styled.div`
border-radius:10px;
padding-top:-10px;
height:20px;
align-self:center;
align-items:center;
background:${props => props.flag ? "whitesmoke" : "white"};
cursor:pointer

`
export  const SizeDiv = styled.div`
border-radius:10px;
padding-top:-10px;
height:20px;
align-self:center;
align-items:center;
background:${props => props.flag ? "whitesmoke" : "white"};
cursor:pointer
`
export const TopDiv = styled.div`
display:flex;
justify-content:space-between;
margin-right:38px;
@media (max-width: 450px)
{
  display:grid;
  grid-template-columns: repeat(1,1fr);
  gap:20px
}
`