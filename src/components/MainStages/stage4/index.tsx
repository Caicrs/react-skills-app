import { useGeneral } from '../../../contexts/GeneralContext';
import { getImage } from '../../../lib/api';
import SearchInput from '../../SearchInput';
import * as S from './styles';
import { hitsProps } from '../../../lib/models';
import { useState } from 'react';

const Stage_4 = () => {
	const { setIsLoading } = useGeneral();
	const [data, setData] = useState<hitsProps[]>([]);

	const handleGetData = async (text: string) => {
		setIsLoading(true);
		try {
			const { hits } = await getImage(text);
			setData(hits);
		} catch (error) {}
		setIsLoading(false);
	};

	return (
		<S.Container>
			<SearchInput
				placeholder='Buscar imagens...'
				onSearch={(e: string) => handleGetData(e)}
			/>
			{data &&
				data.map((item) => (
					<S.Block>
						<img src={item.webformatURL} />
						<div>
							<S.Text>Views: {item.views}</S.Text>
							<S.Text>Likes: {item.likes}</S.Text>
						</div>
					</S.Block>
				))}
		</S.Container>
	);
};

export default Stage_4;
