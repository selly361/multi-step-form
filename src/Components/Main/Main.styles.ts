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

	@media (min-width: 900px) and (max-width: 1168px) {
		width: 100vw;
		height: 100vh;
	}


	@media (max-width: 900px) {
		height: max-content;
		max-width: 500px;
		margin: auto;
		padding: 32px 24px;
		margin-top: 100px;
	}
`

const Container = styled.div`
	height: 100%;
	width: 450px;
	padding: 40px 0 16px 0;
    position: relative;

	@media (max-width: 900px) {
		position: static;
		padding: 0;
		width: 100%;
	}
`

const Title = styled.h2``

const Description = styled.p`
	margin-bottom: 40px;
`

export { StyledMain, Container, Title, Description }
