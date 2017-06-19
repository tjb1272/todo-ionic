import {Component} from "@angular/core";
import {ModalController, NavController} from "ionic-angular";

import {ItemCreatePage} from "../item-create/item-create";
import {Item} from "../../models/item";
import {Items} from "../../providers/items";
import {ItemDetailPage} from "../item-detail/item-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.items.query().subscribe(items => this.currentItems = items);
  }

  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item).subscribe(resp => this.currentItems.push(resp));
      }
    });
    addModal.present();
  }

  deleteItem(item: Item) {
    this.items.delete(item);
    this.currentItems.splice(this.currentItems.indexOf(item), 1);
  }

  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}
