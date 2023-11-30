import Login from "../../components/Reusable/Login/Login"
import ReturnButton from "../../components/Reusable/ReturnButton/ReturnButton"

export default function EmployeesByDepartmentPage() {
  return(
    <main>
      <section className="login-page">
        <h2 className="title is-4">СТРАНИЦА ЛОГИНА</h2>
        <Login/>
        <ReturnButton/>
      </section>
    </main>
  )
}
