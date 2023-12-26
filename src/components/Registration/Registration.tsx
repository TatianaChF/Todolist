import styles from "./Registration.module.css"

export const Registration = () => {
    return (
        <div>
            <div className={styles.container}>
                <form className={styles.form_registration}>
                    <h1>Registration</h1>
                    <div className={styles.form_input}>
                        <label htmlFor="login"><b>Login</b></label>
                        <input type="text" placeholder="Enter login" name="login" id="login" />
                    </div>
                    <div className={styles.form_input}>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter password" name="psw" id="psw" />
                    </div>
                    <button type="submit">Register</button>
                </form>
                <button className={styles.btn_back}>Come back</button>
            </div>
        </div>
    )
}   