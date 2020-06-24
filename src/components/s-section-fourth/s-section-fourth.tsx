import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {SSectionFourthItems} from "./interface/common.interface";

@Component({
  tag: "s-section-fourth",
  styleUrl: "s-section-fourth.css",
  shadow: false,
})
export class SSectionFourth implements ComponentInterface {
  /**
   * Интерфейс для SectionFourth
   */
  @Prop() sectionFourth: SSectionFourthItems[] = [];

  /**
   * Массив для SectionFourth
   */
  @Prop() forSectionFourth: any;

  /**
   * Клик по SectionFourthTitle
   */
  @Event() clickSectionFourthTitle: EventEmitter;

  /**
   * Клик по SectionFourthImage
   */
  @Event() clickSectionFourthImage: EventEmitter;

  /**
   * Клик по SectionFourthText
   */
  @Event() clickSectionFourthText: EventEmitter;

  /**
   * Клик по SectionFourthButton
   */
  @Event() clickSectionFourthButton: EventEmitter;

  render() {
    const getSectionFourth = this.forSectionFourth.map((item) => {
      return (
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div
                class="title"
                onClick={() => this.clickSectionFourthTitle.emit("Title")}
              >
                {item.titl}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 animate__animated animate__fadeInLeft wow fadeInLeft">
              <div
                class="image"
                style={{ backgroundImage: "url(" + item.url + ")" }}
                onClick={() => this.clickSectionFourthImage.emit("Image")}
              />
            </div>
            <div class="col-md-6">
              <div class="my-block">
                <div
                  class="text"
                  onClick={() => this.clickSectionFourthText.emit("Text")}
                >
                  {item.text}
                </div>
                <div class="my-button">
                  <button
                    class="bt"
                    onClick={() => this.clickSectionFourthButton.emit("Button")}
                  >
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div class="section-fourth">{getSectionFourth}</div>;
  }
}
