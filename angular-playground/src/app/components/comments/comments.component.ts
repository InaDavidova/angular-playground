import { Component, OnInit } from '@angular/core';
import { PostsService, TList } from 'src/app/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  list: TList = [];

  constructor(private posts:PostsService) { }

  ngOnInit(): void {
    this.posts.getList()
    // @ts-ignore
    .subscribe((data: TList) => {
      this.list = data
    })
  }

  onPost(): void{
    this.posts.add()
    // @ts-ignore
    .subscribe((data: TList)=>{
      console.log(data);
    })
  }

  onDelete(id:number):void {
    console.log(id);
    
    this.posts.delete(id)
    // @ts-ignore
    .subscribe((data)=>{
      console.log(data);
    })
  }
}
