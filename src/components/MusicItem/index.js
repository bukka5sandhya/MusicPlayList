import {AiOutlineDelete} from 'react-icons/ai'

import {
  // eslint-disable-next-line import/named
  MusicListItem,
  // eslint-disable-next-line import/named
  TrackInfoContainer,
  // eslint-disable-next-line import/named
  MusicTrackImage,
  // eslint-disable-next-line import/named
  NameGenreContainer,
  // eslint-disable-next-line import/named
  Name,
  // eslint-disable-next-line import/named
  Genre,
  // eslint-disable-next-line import/named
  DurationDeleteContainer,
  // eslint-disable-next-line import/named
  Duration,
  // eslint-disable-next-line import/named
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {MusicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <MusicListItem>
      <TrackInfoContainer>
        <MusicTrackImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </TrackInfoContainer>
      <DurationDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          data-testid="delete"
          onClick={onDeleteTrack}
        >
          <AiOutlineDelete size={25} />
        </DeleteButton>
      </DurationDeleteContainer>
    </MusicListItem>
  )
}

export default MusicItem
