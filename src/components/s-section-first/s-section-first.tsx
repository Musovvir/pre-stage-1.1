import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {SSectionFirstItems} from "./interface/common.interface";


@Component({
  tag: "s-section-first",
  styleUrl: "s-section-first.css",
  shadow: false,
  scoped: true,
})
export class SSectionFirst implements ComponentInterface {

  /**
   * Интерфейс для SectionFirst
   */
  @Prop() sectionFirst: SSectionFirstItems[] = [];

  /**
   * Массив для SectionFirst
   */
  @Prop() forSectionFirst: any;

  /**
   * Клик по Text
   */
  @Event() clickSectionFirstText: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickSectionFirstSubtext: EventEmitter;

  /**
   * Клик по Button
   */
  @Event() clickSectionFirstButton: EventEmitter;

  /**
   * Клик по Image
   */
  @Event() clickSectionFirstImage: EventEmitter;

  render() {
    const getSectionFirst = this.forSectionFirst.map((item) => {
      return (
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="info">
                <div
                  class="tit"
                  onClick={() => this.clickSectionFirstText.emit("Text")}
                >
                  {item.text}
                </div>
                <div
                  class="subtext"
                  onClick={() => this.clickSectionFirstSubtext.emit("Subtext")}
                >
                  {item.subtext}
                </div>
                <div class="my-button">
                  <button
                    class="bt"
                    onClick={() => this.clickSectionFirstButton.emit("Button")}
                  >
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="image"
                style={{ backgroundImage: "url(" + item.url + ")" }}
                onClick={() => this.clickSectionFirstImage.emit("Image")}
              />
            </div>
          </div>
        </div>
      );
    });
    return <div class="section-first">{getSectionFirst}</div>;
  }
}
