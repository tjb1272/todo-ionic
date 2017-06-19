import {Injectable} from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/add/operator/map";

import {Api} from "./api";

import {Item} from "../models/item";

@Injectable()
export class Items {
  private headers = new Headers({'Content-type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('tasks', params)
      .map(resp => resp.json());
  }

  add(item: Item) {
    return this.api.post('tasks', JSON.stringify(item), this.options)
      .map(resp => resp.json());
  }

  delete(item: Item) {
    return this.api.delete('tasks' + '/' + item['id'])
      .map(resp => resp.json());
  }

  update(item: Item) {
    return this.api.put('tasks' + '/' + item['id'], JSON.stringify(item), this.options)
      .map(resp => resp.json());
  }

}
