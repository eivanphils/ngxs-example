import { PostsState } from './store/posts/posts.state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRoutingModule } from './app-routing.module';

import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { ListarPostsComponent } from './listar-posts/listar-posts.component';
import { CrearPostComponent } from './crear-post/crear-post.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarPostsComponent,
    CrearPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([
      PostsState
    ],
      { developmentMode: !environment.production}
    ),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
