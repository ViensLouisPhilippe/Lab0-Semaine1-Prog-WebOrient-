import { Component } from '@angular/core';
import { ImaginaryFriend } from 'src/model/imaginaryFriend';
import { Nintendog } from 'src/model/nintendog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWisdom = "phrase du quotidien";

  name ?: string;
  occupation ?: string;
  darkMode : boolean = false;

  n : number;

  dog: Nintendog;

  friends : ImaginaryFriend[] = [];

  hateList = ["J'aime pas le real madrid","J'aime pas dire pain au chocolat","J'aime pas le mode de paiement debit"]
  constructor(){
    this.n = 3;
    this.dog = new Nintendog("jean le chien", "/assets/img/Nintendog.jpg")

    this.friends = [new ImaginaryFriend("Rashid", "centre d'appel de fraud"),
                    new ImaginaryFriend("Theo", "Artiste ASMR"),
                    new ImaginaryFriend("Jean-Marc-Antoine-Éric", "taxeur au école secondaire")]
  }

  addFriend(x ?:string,y ?:string) : void{
    if(x != undefined && y != undefined)
    {
      this.friends.push(new ImaginaryFriend(x, y));
      this.name = "";
      this.occupation = "";
    }
  }

  removeFriend() : void{
    this.friends.pop();
  }

  toggleMode(){
    this.darkMode = !this.darkMode;
  }
}
