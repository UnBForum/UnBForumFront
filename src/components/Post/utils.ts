export const setFontSizeToPostContent = (
  isComment: boolean,
  isInsideTopic: boolean,
): string => {
  if (isComment) {
    return '0.9rem'
  }

  if (isInsideTopic) {
    return '1rem'
  }

  return '0.9rem'
}

export const setFontSizeToPostContentMobile = (
  isComment: boolean,
  isInsideTopic: boolean,
): string => {
  if (isComment) {
    return '0.7rem'
  }

  if (isInsideTopic) {
    return '0.8rem'
  }

  return '0.7rem'
}
