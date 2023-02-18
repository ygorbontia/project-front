import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { RatingStarsSC } from './style';

export function RatingStars({ rating }) {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push( <AiFillStar size={ 16 } /> )
    } else {
      stars.push( <AiOutlineStar size={ 16 } /> )
    }
  }

  return (
    <RatingStarsSC>
      { stars }
    </RatingStarsSC>
  )
}