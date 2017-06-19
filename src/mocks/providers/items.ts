import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {Item} from "../../models/item";

@Injectable()
export class Items {
  items: Item[];

  constructor(public http: Http) {
    let items = [
      {
        "name": "Levar irmã na escola",
        "description": "Ela tem que estudar pra garantir um futuro brilhante pra família, já que virei desenvolvedor"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
