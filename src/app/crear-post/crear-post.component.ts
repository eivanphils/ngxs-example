import { AddPost } from './../store/posts/posts.actions';
import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.scss']
})
export class CrearPostComponent implements OnInit {
  public text: string;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public addPost() {
    this.store.dispatch(new AddPost({ id: uuid(), text: this.text }));
    this.text = '';
  }

}
