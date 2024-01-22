export default function trasnformDate(date) {
  return new Date(date).toLocaleDateString().replaceAll('/', '.');
}
