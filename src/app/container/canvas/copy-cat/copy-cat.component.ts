import { Component, OnInit } from '@angular/core';
import { MarkovService } from '../../../service/markov.service';

@Component({
  selector: 'app-copy-cat',
  templateUrl: './copy-cat.component.html',
  styleUrls: ['./copy-cat.component.scss']
})
export class CopyCatComponent implements OnInit {

  private _userText;
  private _nGramsDict: any = {};
  private _nGramSize = 4;
  private _copyText;

  constructor(private markovS: MarkovService) { }

  ngOnInit() {}

  userTextUpdate(event) {
      this._userText = event.value;
      console.log(event.value);
      this.generateNGramsDict();
      this.generateCopy();
  }

  generateNGramsDict() {
    this.nGramsDict = this.markovS.buildGenerator(this._userText, this._nGramSize);
  }

  generateCopy() {
    if (this._nGramsDict && Object.keys(this._nGramsDict)) {
      this._copyText = this.markovS.copyCatMarkov(this._nGramsDict, this._nGramSize);
    }
  }

  public get userText() {
    return this._userText;
  }
  public set userText(value) {
    this._userText = value;
  }
  public get nGramsDict() {
    return this._nGramsDict;
  }
  public set nGramsDict(value) {
    this._nGramsDict = value;
  }
  public get copyText() {
    return this._copyText;
  }
  public set copyText(value) {
    this._copyText = value;
  }
}
