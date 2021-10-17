import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from '../can-activate.guard';
import { PostsResolverGuard } from '../posts-resolver.guard';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [

  {
    path: '',
    canActivateChild: [CanActivateGuard],
    children: [
      {
        path: '',
        component: PostsComponent,
        resolve: { posts: PostsResolverGuard }
      },
      {
        path: 'usuarios/:id',
        component: PostsComponent,
        resolve: { posts: PostsResolverGuard }
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }


// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       {
//         path: '',
//         component: PostsComponent,
//         canActivate: [CanActivateGuard]
//       },
//       {
//         path: ':id/posts',
//         component: PostsComponent,
//         canActivate: [CanActivateGuard]
//       },
//       {
//         path: '**',
//         redirectTo: '/'
//       }
//     ]
//   }];
