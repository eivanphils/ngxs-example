import { RemovePost } from './../store/posts/posts.actions';
import { Posts } from './../store/posts/posts.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';

@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html',
  styleUrls: ['./listar-posts.component.scss']
})
export class ListarPostsComponent implements OnInit {
  public posts: Observable<Posts>;
  constructor(
    private store: Store
  ) {
    this.posts = this.store.select(state => state.posts.posts);
  }
  ngOnInit() {
  }
  public removePost(id) {
    this.store.dispatch(new RemovePost(id));
  }
}
