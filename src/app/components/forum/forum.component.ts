import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})

export class ForumComponent implements OnInit {
  newQuestion: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showForm() {
    this.newQuestion = !this.newQuestion;
  }

}
