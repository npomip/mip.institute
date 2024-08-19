const highlightFirstWord = (word: string) => {
  return word
    .split(' ')
    .filter((_, index) => index !== 0)
    .join(' ')
}

export default highlightFirstWord