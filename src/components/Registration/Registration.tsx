export const Registration = () => {
    return (
        <div>
            <form>
                <h2>Registration</h2>
                <label htmlFor="login"><b>Login</b></label>
                <input type="text" placeholder="Enter login" name="login" id="login" />
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter password" name="psw" id="psw" />
            </form>
        </div>
    )
}