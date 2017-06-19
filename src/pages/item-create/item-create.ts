import {Component} from "@angular/core";
import {NavController, ViewController} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html',
})
export class ItemCreatePage {
  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) {
      return;
    }
    this.viewCtrl.dismiss(this.form.value);
  }
}
