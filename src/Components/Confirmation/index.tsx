import React from 'react'
import {
	Container,
	StyledConfirmed,
	Title,
	Message
} from './Confirmation.styles'
import { CheckmarkIcon } from 'Assets/Icons'

function Confirmation() {
	return (
		<Container>
			<StyledConfirmed>
				<CheckmarkIcon />
				<Title>Thank you!</Title>
				<Message>
					Thanks for confirming your subscription! We hope you have fun using
					our platform. If you ever need support, please feel free to email us
					at support@loremgaming.com.
				</Message>
			</StyledConfirmed>
		</Container>
	)
}

export default Confirmation
