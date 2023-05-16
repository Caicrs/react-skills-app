import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	max-height: 600px;
	padding: 0 24px;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	overflow-y: scroll;
`;

export const Block = styled.div`
	width: fit-content;
	background: white;
	border-radius: 24px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	> div {
		width: 100%;
		padding: 12px 0;
		display: flex;
		gap: 24px;
		justify-content: center;
	}
	> img {
		width: 100%;
		border-radius: 24px 24px 0 0;
	}
`;

export const Text = styled.div`
	font-weight: 700;
`;
