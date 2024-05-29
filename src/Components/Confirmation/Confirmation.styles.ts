import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
	justify-content: center;
	align-items: center;
`

const StyledConfirmed = styled.div`
	height: 238px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Title = styled.h2`
	font-weight: 700;
	font-size: 32px;
	line-height: 37px;
	text-align: center;
	color: #022959;
    margin-top: 36px;
`

const Message = styled.p`
    margin-top: 14px;
`

export { Container, StyledConfirmed, Title, Message }