import { useParams } from 'react-router-dom';
import * as S from './styles';

const ImageById = () => {
	const { webformaturl, views, downloads, likes, comments, user } = useParams();
	return (
		<S.Container>
			<S.Card>
				<img alt='' src={'https://pixabay.com/get/' + webformaturl} />
				<S.ContentGrid>
					<div>Views : {views}</div>
					<div>Downloads : {downloads}</div>
					<div>Likes : {likes}</div>
					<div>Comments : {comments}</div>
					<div>Autor : {user}</div>
				</S.ContentGrid>
			</S.Card>
		</S.Container>
	);
};

export default ImageById;
