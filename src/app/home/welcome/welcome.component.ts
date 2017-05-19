import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

public color:String="purple";
public colours: [any] = 
[
'red', 
'pink',
'purple', 
'deep-purple', 
'indigo', 
'blue', 
'light-blue', 
'cyan', 
'teal', 
'green', 
'light-green', 
'lime', 
'yellow', 
'amber', 
'orange',
'deep-orange', 
'brown', 
'grey', 
'blue-grey']

public shades: [any] = [1,2,3,4,5,6,7,8,9]
  constructor() { }

getTitleClass(color)
{
  return color + '-500 swatch-title';
}

getshadesClass(color, i)
{
 
 return  color + '-' + i*100 + ' color-swatch'
 //color + '-50 color-swatch' ;
}


onChange(color) {
    console.log(color);
    this.color=color;
}


getColor50(color)
{
   return  color + '-50 color-swatch';
}

  ngOnInit() {
    this.color = this.colours[0];
  }

}
