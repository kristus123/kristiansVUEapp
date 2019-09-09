import planetsDao from './PlanetApiService.js'


class AuthService {
    isAuthenticated() {
        if (localStorage.getItem('username')) {
            console.log("is logged in")
            return true
        }
    
        console.log("du er ikke logged inn")
        return false
    }


    login(username) {
        if (!this.isAuthenticated()) {

            console.log("heieheie")
            localStorage.setItem('username', username);
            return true
        }
        return false;
    }

    logout() {
        localStorage.removeItem("username");
    }


    async register() {
        if (this.isAuthenticated()) {
            console.log("alraedy logged in")
            return false
        } else {
            console.log("ACTION")
            localStorage.setItem('username', await planetsDao.generateApiKey())
            return true;
        }
    }
}




const authService = new AuthService();
export default authService;