import * as S from './styles'

export type TagProps = {
  tagName: string
  grayBackground?: boolean
  tagColor?: boolean
}

export const Tag = ({ tagName, grayBackground, tagColor }: TagProps) => {
  return (
    <S.TagContent grayBackground={grayBackground}>
      <S.TagText tagColor={tagColor}>{tagName}</S.TagText>
    </S.TagContent>
  )
}
