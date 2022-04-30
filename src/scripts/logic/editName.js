export function editName(name) {
  const lowLetters = name.toLowerCase();
  const withHifen = lowLetters.replace(/ /g, "-");
  return withHifen;
}
