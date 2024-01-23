import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWisdom = "phrase du quotidien";

  n : number;

  dog: Nintendog;

  hateList = ["J'aime pas le real madrid","J'aime pas dire pain au chocolat","J'aime pas le mode de paiement debit"]
  constructor(){
    this.n = 3;
    this.dog = new Nintendog("jean le chien", "/assets/img/Nintendog.jpg")
  }

  
}
class Nintendog{
  age = 5;
  constructor(public name: string, public imgUrl : string){}

  dogInfo() : string{
    return this.name + " est un Nintendog de " + this.age + " an(s)."
  }

}