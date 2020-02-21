import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private authSvc: AuthService) { }

  ngOnInit() {
  }

  loadServers(id: number) {
    alert("Loading server Page");
    this.router.navigate(['/servers', id, 'edit'],
      { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  onLogIn() {
    this.authSvc.logIn();
  }

  onLogOut() {
    this.authSvc.logOut();
  }
}
