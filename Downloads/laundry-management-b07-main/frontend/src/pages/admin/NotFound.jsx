import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '100vh'
      }}
    >
      <h1>404</h1>

      <h3>Page Not Found</h3>

      <Link
        to="/"
        className="btn btn-primary mt-3"
      >
        Kembali ke Dashboard
      </Link>
    </div>
  )
}