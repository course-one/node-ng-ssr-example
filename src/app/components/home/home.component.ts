import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private title: Title,
        private meta: Meta
    ) { }

    ngOnInit() {
        this.title.setTitle('Home / Angular SSR');
        this.meta.updateTag({
            'description': 'Welcome to home section'
        });
    }
}
