import ReturnButton from "../../components/Reusable/ReturnButton/ReturnButton"

export default function NotFoundPage() {
  return(
    <main>
      <section className="not-found-page">
        <h1 className="title is-3">404</h1>
        <h2 className="title is-4">СТРАНИЦА НЕ НАЙДЕНА</h2>
        <ReturnButton/>
      </section>
    </main>
  )
}
