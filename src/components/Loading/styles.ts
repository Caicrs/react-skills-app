import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	position: absolute;
	color: white;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const Spinner = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 6px solid #ccc;
	border-top-color: #0074d9;
	animation: ${spin} 1s ease-in-out infinite;
`;
