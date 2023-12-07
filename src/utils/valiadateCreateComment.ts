export const valiadateCreateComment = (comment: string) => {
  let isValid = true
  const fieldErrors: string[] = []

  if (!comment || comment === '') {
    isValid = false
    fieldErrors.push('Comentário')
  }

  return { isValid, fieldErrors }
}
