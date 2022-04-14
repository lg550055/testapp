
export default function Login() {
  return (
    <section className="hero">
      <form>
        <h1>Please Log In</h1>
        <label>
          <p>Email</p>
          <input type='email' />
        </label>
        <label>
          <p>Password</p>
          <input type='password' />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  )
}