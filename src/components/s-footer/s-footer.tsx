import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SFooterItems } from "./interface/common.interface";

@Component({
  tag: "s-footer",
  styleUrl: "s-footer.css",
  shadow: false,
})
export class SFooter implements ComponentInterface {
  /**
   * Интерфейс для Footer
   */
  @Prop() footer: SFooterItems[] = [];

  /**
   * Массив для Footer
   */
  @Prop() forFooter: any;

  /**
   * Клик по FooterFacebook
   */
  @Event() clickFooterFacebook: EventEmitter;

  /**
   * Клик по FooterIn
   */
  @Event() clickFooterIn: EventEmitter;

  /**
   * Клик по FooterCopyright
   */
  @Event() clickFooterCopyright: EventEmitter;
  render() {
    const getFooter = this.forFooter.map((item) => {
      return (
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-2">
              <div class="facebook">
                <i
                  class={item.facebook}
                  aria-hidden="true"
                  onClick={() => this.clickFooterFacebook.emit("Facebook")}
                />
              </div>
              <div class="in">
                <i
                  class={item.in}
                  aria-hidden="true"
                  onClick={() => this.clickFooterIn.emit("In")}
                />
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-7">
              <div
                class="copyright"
                onClick={() => this.clickFooterCopyright.emit("Copyright")}
              >
                {item.copyright}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div class="footer">{getFooter}</div>;
  }
}
