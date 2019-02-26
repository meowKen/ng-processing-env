import { Injectable } from '@angular/core';

@Injectable()
export class MarkovService {

  constructor() { }

  copyCatMarkov(ngrams: any, range: number): string {
    const keys = Object.keys(ngrams);
    let ret = keys[Math.floor(Math.random() * (keys.length - 1))];
    for (let i = 0; i < 500; i++) {
      const len = ret.length - 1;
      let tag = '';
      for (let k = len - range + 1 ; k <= len; k++) {
        tag += ret[k];
      }
      if (!ngrams[tag]) {
        return ret;
      }
      const next = Math.floor(Math.random() * ngrams[tag].length);
      ret += ngrams[tag][next];
    }
    console.log(ret);
    return ret;
  }

  buildGenerator(text: string, range: number) {
    const ngrams: any = {};
    if (text && range && text.length) {
      for (let i = 0; i <= text.length - range - 1; i++) {
        let gram = '';
        for (let j = 0; j < range; j++) {
          gram += text[i + j] + '';
        }
        if (!ngrams[gram]) {
          ngrams[gram] = [text[i + range]];
        } else {
          ngrams[gram].push(text[i + range]);
        }
      }
      return ngrams;
    }
    return;
  }

}
