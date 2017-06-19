import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Item} from "../../models/item";

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Item) {
    this.item = navParams.get('item');
  }

}
