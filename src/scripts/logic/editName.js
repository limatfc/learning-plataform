export function editName(name) {
  const lowLetters = name.toLowerCase();
  const trim = lowLetters.trim();
  const withHifen = trim.replace(/ /g, "-");
  return withHifen;
}
