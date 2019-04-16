import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularngClass';

  users=[
    'aaaaa','bbbbb','ccccc','ddddd'
  ]

  getCssClass(flag:string){
    let cssclass;
    if(flag=="mode"){
      cssclass={
        'one':true,
        'two':true
      }
    }
    else{
      cssclass={
        'one':false,
        'two':true
      }
    }
    return cssclass
  }
}
