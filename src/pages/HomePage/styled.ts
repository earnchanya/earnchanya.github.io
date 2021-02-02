import { BLUE } from 'common/styles/colors'
import styled from 'styled-components'

type Props = {
	$color?: 'red'
}

export const Text = styled.div<Props>`
	color: ${BLUE[600]};
	font-size: 20px;
`

export const Container = styled.div`
	width: 100%;
	height: 1009px;
`
