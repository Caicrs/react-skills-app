import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import * as S from './styles';

interface InputProps {
	onSearch: (searchText: string) => void;
	placeholder: string;
}

const SearchInput: React.FC<InputProps> = ({ onSearch, placeholder }) => {
	const [searchText, setSearchText] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearch(searchText);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<S.Container>
				<S.Input
					type='text'
					placeholder={placeholder}
					value={searchText}
					onChange={handleInputChange}
				/>
				<InputGroup>
					<Button
						style={{ border: 'none' }}
						type='submit'
						variant='outline-secondary'>
						Buscar
					</Button>
				</InputGroup>
			</S.Container>
		</Form>
	);
};

export default SearchInput;
