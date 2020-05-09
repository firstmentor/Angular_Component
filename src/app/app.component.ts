import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PNINFOSYS';
  public a= 10;
  public b= 20;
  obj={
    name:'anil',
    email:'vikas@gmail.com'
  }
  arrayTest=[10,2,4,6]

  // click event
  clickMeEvent(){
    alert("Hello Pninfosys")
  }

  // clickMeEvent(a,b){
  //   alert(a+b)
  // }
  

  //*ngFor Loop
  student=['vikas','mohit','rohit'];
  info=[
    {name:'vikas',email:'vikas@gmail.com'},
    {name:'mohit',email:'mohit@gmail.com'},
    {name:'rohit',email:'rohit@gmail.com'},
  ]
 
  //Property Binding
   disableTextBox=false
   

  //*ngIf
  show=false 


}
