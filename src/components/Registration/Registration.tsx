import styles from "./Registration.module.css"

export const Registration = () => {
    return (
        <div>
            <form className={styles.form_registration}>
                <h2>Registration</h2>
                <div>
                    <label htmlFor="login"><b>Login</b></label>
                    <input type="text" placeholder="Enter login" name="login" id="login" />
                </div>
                <div>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter password" name="psw" id="psw" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}   