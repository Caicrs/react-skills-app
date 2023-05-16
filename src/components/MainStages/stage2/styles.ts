import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	max-height: 500px;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	overflow-y: scroll;
`;

export const Box = styled.div`
	width: fit-content;
	color: white;
`;

export const List = styled.ul`
	padding-top: 24px;
	display: flex;
	max-height: 400px;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`;

export const Item = styled.div`
	max-width: 50%;
	display: flex;
	padding-bottom: 12px;
	flex-direction: column;
	align-items: center;
	border-bottom: 1px solid rgba(255, 255, 255, 0.25);

	> img {
		padding-top: 12px;
	}
`;
