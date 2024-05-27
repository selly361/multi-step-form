import { useRef, useCallback } from 'react'

const useKeyboardNavigation = () => {
	const elementsRef = useRef<(HTMLElement | null)[]>([])

	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLElement>, index: number) => {
			switch (event.key) {
				case 'ArrowUp':
					event.preventDefault()
					if (index > 0 && elementsRef.current[index - 1]) {
						elementsRef.current[index - 1]!.focus()
					}
					break
				case 'ArrowDown':
					event.preventDefault()
					if (
						index < elementsRef.current.length - 1 &&
						elementsRef.current[index + 1]
					) {
						elementsRef.current[index + 1]!.focus()
					} else {
						elementsRef.current[0]!.focus()
					}
					break
				default:
					break
			}
		},
		[]
	)

	return { elementsRef, handleKeyDown }
}

export default useKeyboardNavigation
