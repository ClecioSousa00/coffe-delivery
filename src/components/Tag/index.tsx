import * as S from './styles'

export type TagProps = {
  tagName: string
  grayBackground?: boolean
  tagColor?: boolean
}

export const Tag = ({ tagName, grayBackground, tagColor }: TagProps) => {
  return (
    <S.TagContent testID="tag" grayBackground={grayBackground}>
      <S.TagText testID="text-tag" tagColor={tagColor}>
        {tagName}
      </S.TagText>
    </S.TagContent>
  )
}
