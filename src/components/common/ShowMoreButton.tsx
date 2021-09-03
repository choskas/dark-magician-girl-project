import {ShowMoreBtn} from '../../styles/common/ShowMoreButton';

const ShowMoreButton = ({onClick}) => {
    return(
        <ShowMoreBtn onClick={() => onClick()}>Ver mas</ShowMoreBtn>
    )
};

export default ShowMoreButton