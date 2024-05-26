const slideAnimation = {
	enter: (direction: number) => ({
		x: direction > 0 ? '25%' : '-25%',
		opacity: 0
	}),
	center: {
		x: '0%',
		opacity: 1
	},
	exit: (direction: number) => ({
		x: direction > 0 ? '25%' : '-25%',
		opacity: 0
	})
}

export { slideAnimation }
