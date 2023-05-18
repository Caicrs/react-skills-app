import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	max-height: 600px;
	padding: 0 5%;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	overflow-y: scroll;
`;

export const ImagesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 24px;
	grid-row-gap: 24px;
	@media (max-width: 828px) {
		/* Styles for mobile */
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 500px) {
		/* Styles for mobile */
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Block = styled.div``;

export const Content = styled.div`
	width: fit-content;
	background: white;
	border-radius: 24px 24px 0 0;
	display: flex;
	cursor: pointer;
	flex-direction: column;
	gap: 6px;
	transition: 0.5s;

	> div {
		width: 100%;
		padding: 12px 0;
		display: flex;
		gap: 24px;
		justify-content: center;
	}

	> img {
		width: 300px; /* Make the image fill the container horizontally */
		height: 220px; /* Make the image fill the container vertically */
		object-fit: cover; /* Use object-fit to control how the image is scaled */
		border-radius: 24px 24px 0 0;
		@media (max-width: 828px) {
			width: 287px;
		}
	}

	&:hover {
		opacity: 0.5;
	}
`;

export const Text = styled.div`
	font-weight: 700;
`;

export const LikeButton = styled.div`
	width: 100%;
	color: white;
	padding: 12px 0;
	cursor: pointer;
	background: #0b5ed7;
	border-radius: 0 0 24px 24px;
	transition: 0.3s;
	&:hover {
		opacity: 0.5;
	}
`;
