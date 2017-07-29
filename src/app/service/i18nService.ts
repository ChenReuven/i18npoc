import {Injectable} from "@angular/core";
import {i18nMessages} from "./i18n.messages.en";

@Injectable()
export class i18nService {
  translate(key: string) {
    return i18nMessages[key];
  }
}
