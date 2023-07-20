import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  doSearch(name: string) {
    this.router.navigate(['/search', name]);
  }
}