export function filterBySection(activities, section) {
  const filteredSection = activities.filter((item) => item.section === section);
  return filteredSection;
}
