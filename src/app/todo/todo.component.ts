import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

	currentItem = "";

	things : string[] = [];
	completed : string[] = [];

  constructor() { }

	Add() {
		this.things.push(this.currentItem);
		console.log(this.things.length);
	}

	Remove(which) {
		this.completed.push(this.things[which]);
		this.things.splice(which, 1);	
	}

	RemoveCompleted(which) {
		this.completed.splice(which, 1);
	}

  ngOnInit(): void {
  }

}
