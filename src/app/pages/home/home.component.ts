/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  query;
  sub: any;
  dictionary: string;
  dicts: {};
  title = '';
  results: any[] = [];
  constructor(private http: HttpClient, private route: ActivatedRoute) {
}
  ngOnInit() {
    this.query = {
      headword: '',
      relatedwords: '',
      synonyms: '',
      partsofspeech: '',
      search: '',
    };
    this.dicts = {
      ldoce5: 'Longman Dictionary of Contemporary English (5th edition)'
    }
    this.sub = this.route.params.subscribe(params => {
      this.dictionary = params['dict'];
      if (this.dictionary) {
        this.title = this.dicts[this.dictionary];
      }
    });
}
ngOnDestroy() {
    this.sub.unsubscribe();
  }
getWords() {
    let params = new URLSearchParams();
    params.set('headword', this.query.headword);
    if (this.query.synonyms) {
      params.set('synonyms', this.query.synonyms);
    }
    if (this.query.partsofspeech) {
      params.set('part_of_speech', this.query.partsofspeech);
    }
    if (this.query.search) {
      params.set('search', this.query.search);
    }
    let dict = (this.dictionary) ? this.dictionary : 'ldoce5';
    this.http.get(`https://api.pearson.com/v2/dictionaries/${dict}/entries?${params.toString()}`)
      .subscribe(
        dictresults => {
          this.results = (dictresults as any).results;
        },
        error => console.log(error)
      )
  }
}
