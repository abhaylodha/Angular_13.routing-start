import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server {
    id: number,
    name: string,
    status: string
}

@Injectable({ providedIn: 'root' })
export class ServerResolver implements Resolve<Server>{

    constructor(private serverSvc: ServersService) {
        console.log("Resolver Constructed ");
    }

    resolve(route: ActivatedRouteSnapshot,
        states: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        const t = this.serverSvc.getServer(+route.params['id'])
        console.log("Resolver resolving " + route.params['id'] + " Name: " + t.name);
        return t;
    }
}
