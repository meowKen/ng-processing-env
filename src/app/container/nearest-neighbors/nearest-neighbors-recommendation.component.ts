import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as p5 from 'p5';
import { Config } from '../../config/config';

@Component({
  selector: 'app-nearest-neighbors-recommendation',
  templateUrl: './nearest-neighbors-recommendation.component.html',
  styleUrls: ['./nearest-neighbors-recommendation.component.scss']
})
export class NearestNeighborsRecommendationComponent implements OnInit, AfterViewInit {

  private p5;
  private _starwarsRating;
  private _selectedUser;
  private _displayUser = {};

  @ViewChild('mainFrame')
  private _frameSelector: ElementRef;
  private _configLoaded: boolean;

  constructor(private config: Config) {
  }

  ngOnInit() {
    this._starwarsRating = this.config.starwarsRating;
  }

  ngAfterViewInit() {
    this.createCanvas();
  }

  private createCanvas() {
    // this.p5 = new p5(this.sketch);
  }

  // private sketch(p: any, name: string) {
  //   p.setup = () => {
  //     const canvas = p.createCanvas(1800, 950);
  //     canvas.parent('myFrame');
  //   };

  //   p.draw = () => {
  //     p.background(255, 15, 15);
  //     p.fill(0);
  //     p.rect(p.width / 2, p.height / 2, 50, 50);
  //   };
  // }

  changeFocus(user: any) {
    const u = JSON.parse(user);
    this. _selectedUser = JSON.parse(user);
  }

  onLog() {
    this._starwarsRating = this.config.starwarsRating;
    this._configLoaded = true;
    console.log(this._starwarsRating);
  }

  userString(user) {
    return JSON.stringify(user);
  }

  get starwarsRating() {
    return this._starwarsRating;
  }

  get configLoaded() {
    return this._configLoaded;
  }

  get selectedUser() {
    return this._selectedUser;
  }

  get selectedUserDisplay() {
    return Object.keys(this._selectedUser);
  }

}
