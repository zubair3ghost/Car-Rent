import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserService{

    set token(token: string | null){
        if(token) localStorage.setItem('token', token);
    }

    get token(): string | null{
        const accessToken = localStorage.getItem('token');
        return accessToken;
    }

    set user(user: any){
        localStorage.setItem('user', JSON.stringify(user));
    }

    get user(): any{
        let user = localStorage.getItem('user');
        console.log("check if userexists", user)
        if(user) user = JSON.parse(user);
        return user;
    }


    
}