export function nullCheck(data: any) {
  if (data === null || data === undefined || data === '') {
    return true;
  }

  return false;
}
