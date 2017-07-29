import {Component} from "@angular/core";
import {i18nService} from "./service/i18nService";
import {i18nMessages} from "./service/i18n.messages.en";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <!--<h1 i18n="site header|An introduction header for this sample@@helloHeader">Hello</h1>-->
      <h4 i18n="@@subTitle">sub {{subTitle}}</h4>
      
      <div>i18n service</div>
      <div>{{howareyou}}</div>
    </div>
    <!--<p i18n="Hello owner and seller@@helloHeader">Hello {{ownerName}} and {{sellerName}}</p>-->
  `
})
export class AppComponent {

  public ownerName: string;
  public sellerName: string;
  public subTitle: string;
  public howareyou: string;

  constructor(public i18n: i18nService) {
    this.ownerName = "Yossi";
    this.sellerName = "Bozi";
    this.subTitle = "chen"; ///i18n.translate(i18nMessages.how_are_you);
    this.howareyou = i18n.translate('how_are_you');
    console.log('ownerName = ', this.ownerName);
    console.log('sellerName = ', this.sellerName);
    console.log("howareyou = ",  this.howareyou);
  }
}
