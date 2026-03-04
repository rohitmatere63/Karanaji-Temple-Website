export function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId.toLowerCase());
  if (el) el.scrollIntoView({ behavior: "smooth" });
}