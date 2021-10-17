import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Post[];
  show = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private webApiService: WebApiService
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   if (params.has('id')) {
    //     this.webApiService.obtenerPostPorUsuario(params.get('id')).subscribe(posts => this.posts = posts);
    //   } else {
    //     this.webApiService.obtenerPots().subscribe(posts => this.posts = posts);
    //   }
    // });

    // Resolver
    this.route.data.subscribe((data: { posts: Post[] }) => {
      this.posts = data.posts;
    });
  }

  public goToUsuarios() {
    this.router.navigate(['/usuarios']);
  }


}
