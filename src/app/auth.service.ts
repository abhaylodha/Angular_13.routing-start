

export class AuthService {
    loggedIn = true;

    isAuthorised() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn)
                }, 800);
            })
        return (promise);
    }

    logIn() {
        this.loggedIn = true;
    }

    logOut() {
        this.loggedIn = false;
    }
}
