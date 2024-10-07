function truncate(text, maxLength, suffix = '...') {
  if (text.length <= maxLength) {
    return text
  }

  return text.slice(0, maxLength - suffix.length) + suffix;
}

export default truncate