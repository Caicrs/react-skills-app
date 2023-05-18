import { useGeneral } from '../../../contexts/GeneralContext';
import { getImage } from '../../../lib/api';
import SearchInput from '../../SearchInput';
import * as S from './styles';
import { hitsProps } from '../../../lib/models';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stage_4 = () => {
	const { setIsLoading } = useGeneral();
	const [data, setData] = useState<hitsProps[]>([]);
	const navigate = useNavigate();
	const [likedImages, setLikedImages] = useState<number[]>([]);

	const handleGetData = async (text: string) => {
		setIsLoading(true);
		try {
			const { hits } = await getImage(text);
			setData(hits);
		} catch (error) {}
		setIsLoading(false);
	};

	const likeImage = (id: number) => {
		const check = likedImages.filter((item: number) => item === id);
		if (check.length > 0) {
			const newData = likedImages.filter((item: number) => item !== id);
			setLikedImages(newData);
		} else {
			setLikedImages((lastData) => [...lastData, id]);
		}
	};

	return (
		<S.Container>
			<SearchInput
				placeholder='Buscar imagens...'
				onSearch={(e: string) => handleGetData(e)}
			/>
			<S.ImagesContainer>
				{data &&
					data.map((item) => (
						<S.Block>
							<S.Content
								onClick={() =>
									navigate(
										`/images/${item.webformatURL.substring(
											24,
											item.webformatURL.length
										)}/${item.views}/${item.downloads}/${item.likes}/${
											item.comments
										}/${item.user}`
									)
								}>
								<img alt='' src={item.webformatURL} />

								<div>
									<S.Text>Views: {item.views}</S.Text>
									<S.Text>Likes: {item.likes}</S.Text>
								</div>
							</S.Content>

							<S.LikeButton
								style={
									likedImages.filter((items) => items === item.id).length > 0
										? { background: 'green' }
										: {}
								}
								onClick={() => likeImage(item.id)}>
								{likedImages.filter((items) => items === item.id).length > 0
										? 'Remover curtida'
										: 'Curtir'}
							</S.LikeButton>
						</S.Block>
					))}
			</S.ImagesContainer>
		</S.Container>
	);
};

export default Stage_4;
