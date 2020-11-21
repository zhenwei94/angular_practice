import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../services/author.service'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(
    private authorService: AuthorService,
  ) { }

  ngOnInit(): void {
    this.authorService.getAllAuthors().subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
