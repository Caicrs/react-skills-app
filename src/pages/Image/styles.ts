import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Card = styled.div`
	padding: 24px;
	border-radius: 12px;
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 12px;

	> img {
		width: 100%;
		border-radius: 6px;
	}
`;

export const ContentGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 12px;
	grid-row-gap: 12px;
	> div {
		background: #ffbf00;
		color: #191300;
		padding: 6px 12px;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
