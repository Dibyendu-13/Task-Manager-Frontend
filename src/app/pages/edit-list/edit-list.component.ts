import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent  implements OnInit{

  constructor(private taskService:TaskService ,private route:ActivatedRoute,private router:Router)
  {
    
  }

  listId!:string;
  
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      console.log(params);
      
        this.listId=params['listId'];

     
    }
    )
  }

  updateList(title:string)
  {
    this.taskService.updateList(this.listId,title).subscribe(()=>{
      this.router.navigate(['/lists',this.listId]);
    })
  }
}
