import styled from 'styled-components'

const StyledMain = styled.main`
	width: 940px;
	height: 600px;
	margin: auto;
	background: #ffffff;
	box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
	border-radius: 15px;
	padding: 16px 101px 16px 15px;

	display: flex;
	justify-content: space-between;
`

const Container = styled.div`
	height: 100%;
	width: 450px;
	padding: 40px 0 16px 0;
    position: relative;

`

const Title = styled.h2``

const Description = styled.p`
	margin-bottom: 40px;
`

export { StyledMain, Container, Title, Description }
