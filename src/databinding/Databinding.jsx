//rafc
export const Databinding = () => {
  const fullName = 'Nguyen Viet Hai'

  const sum = (a, b) => {
    return a + b
  }
  
  
  return (
    <div className="container mt-3">
        <h1>Databinding</h1>
        <p className="fs-3 font-weight-bold text-danger">{fullName}</p>
        <p>Sum: {sum(10, 20)}</p>
    </div>
  )
}
