import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.css']
})

export class TopbarComponent implements OnInit {
    
    constructor(
        private _router: Router
    ) { }

    ngOnInit() { }

    redirectHome() {
        this._router.navigate(['/home']);
    }
}