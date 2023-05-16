import axios from 'axios';

const apiKey = '36464041-914aebff367ab42a62d0ea72e';
export const baseURL = `https://pixabay.com/api/?key=${apiKey}&&pretty=true`;

const api = axios.create({
	baseURL,
});

export const getImage = async (searchTerm: string): Promise<any> => {
	const searchFormatted = searchTerm.replaceAll(' ', '+');
	const response = await api.get(`&q=${searchFormatted}&image_type=photo`);
	return response.data;
};
