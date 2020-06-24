import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import {SSectionSecondItems} from "./interface/common.interface";

@Component({
  tag: "s-section-second",
  styleUrl: "s-section-second.css",
  shadow: false,
  scoped: true,
})
export class SSectionSecond implements ComponentInterface {

  /**
   * Интерфейс для SectionSecond
   */
  @Prop() sectionSecond: SSectionSecondItems[] = [];

  /**
   * Массив для SectionSecond
   */
  @Prop() forSectionSecond: any;

  /**
   * Клик по Title
   */
  @Event() clickSectionSecondTitle: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickSectionSecondSubtitle: EventEmitter;

  /**
   * Клик по MyBlock
   */
  @Event() clickSectionSecondMyBlock: EventEmitter;

  render() {
    const getSectionSecond = this.forSectionSecond.map((item) => {
      return (
        <div class="col-md-6 animate__animated animate__fadeInUp wow fadeInUp">
          <div class="">
            <div
              class="my-block"
              onClick={() => this.clickSectionSecondMyBlock.emit("MyBlock")}
            >
              <div class="my-icon">
                <i class={item.icon} aria-hidden="true" />
              </div>
              <div class="info">
                <div class="titl">{item.titl}</div>
                <div class="text">{item.text}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div class="section-second">
          <div class="container">
            <div class="row">
              <div class="col-md animate__animated animate__fadeInUp wow fadeInUp">
                <div
                  class="title"
                  onClick={() => this.clickSectionSecondTitle.emit("Title")}
                >
                  Why Dowork?
                </div>
                <div
                  class="subtitle"
                  onClick={() =>
                    this.clickSectionSecondSubtitle.emit("Subtitle")
                  }
                >
                  These are the benefits you gain by using Dowork.
                </div>
              </div>
            </div>
            <div class="row">{getSectionSecond}</div>
          </div>
        </div>
      </div>
    );
  }
}
