import { Inject, Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { IUser } from '../interfaces/users.interface';

@Injectable()
export class UsersService {
    private localUsersData: Array<IUser>;
    constructor(public http: Http) {

    }
    public getLocalUsersData = () => {
        return this.localUsersData;
    }

    public getAllUsers = (): Observable<IUser[]> => {
        return this.http.get(`http://localhost:3000/users`)
            .map(res => {
                this.localUsersData = <IUser[]>res.json();
                return <IUser[]>res.json();
            })
            .catch(this.handleError);
    }

    public getUser = (userId: number): Observable<IUser> => {
        return this.http.get(`http://localhost:3000/users/user/${userId}`)
            .map(res => {
                return this.localUsersData.find((item) => item.id == userId);
            })
            .catch(this.handleError);
    }

    public removeUser = (userId: number) => {
        return this.http.delete(`http://localhost:3000/users/user/${userId}`)
            .map(res => {
                this.localUsersData = this.localUsersData.filter((item) => item.id != userId);
            })
            .catch(this.handleError);
    }

    public updateUser = (user) => {
        return this.http.post(`http://localhost:3000/users`, user)
            .map(res => {
                if (Array.isArray(user)) {
                    this.localUsersData = this.localUsersData.map((item) => {
                        let newUserData = user.find((userItem) => item.id == userItem.id);
                        if (newUserData) {
                            return newUserData
                        }
                        return item;
                    });
                } else {
                    this.localUsersData = this.localUsersData.map((item) => {
                        if (item.id == user.id) {
                            return user;
                        }
                        return item;
                    });
                }
            })
            .catch(this.handleError);
    };

    private handleError = (error: any) => {
        return Observable.throw(error);
    }
}