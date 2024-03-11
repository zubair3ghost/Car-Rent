import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserService {

private  baseurl:string='HTTP://localhost:5000';
 
    getbaseurl(fileUrl: string){
        return `${this.baseurl}/${fileUrl}`
    }



    set token(token: string | null) {
        if (token) localStorage.setItem('token', token);
    }

    get token(): string | null {
        const accessToken = localStorage.getItem('token');
        return accessToken;
    }

    set user(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    get user(): any {
        let user = localStorage.getItem('user');
        console.log("check if userexists", user)
        if (user) user = JSON.parse(user);
        return user;
    }

    //for api  email setting
    set email(email: any) {
        localStorage.setItem('email', JSON.stringify(email))
    }
    get email(): any {

        let useremail = localStorage.getItem('email')
        console.log(useremail, "this is checking email of forgett passeord user exist");

        if (useremail) useremail = JSON.parse(useremail)

        return useremail
    }



}