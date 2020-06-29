import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SSectionThirdItems } from "./interface/common.interface";

@Component({
  tag: "s-section-third",
  styleUrl: "s-section-third.css",
  shadow: false,
  scoped: true,
})
export class SSectionThird implements ComponentInterface {
  /**
   * Интерфейс для SectionThird
   */
  @Prop() sectionThird: SSectionThirdItems[] = [];

  /**
   * Клик по SectionThird
   */
  @Prop() forSectionThird: any;

  /**
   * Клик по Image
   */
  @Event() clickSectionThirdImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickSectionThirdSubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickSectionThirdSubtext: EventEmitter;

  /**
   * Клик по Title
   */
  @Event() clickSectionThirdTitle: EventEmitter;

  /**
   * Клик по Text
   */
  @Event() clickSectionThirdText: EventEmitter;

  render() {
    const getSectionThird = this.forSectionThird.map((item) => {
      return (
        <div class="row">
          <div class="col-md-8">
            <div
              data-aos="fade-up"
              class="image"
              style={{ backgroundImage: "url(" + item.url + ")" }}
              onClick={() => this.clickSectionThirdImage.emit("Image")}
            />
          </div>
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickSectionThirdSubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickSectionThirdSubtext.emit("Subtext")}
            >
              {item.subtext}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div class="section-third">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div
                class="title"
                onClick={() => this.clickSectionThirdTitle.emit("Title")}
              >
                How it works
              </div>
              <div
                class="text"
                onClick={() => this.clickSectionThirdText.emit("Text")}
              >
                Dowork is super easy to use and it doesn't require extra skills.
              </div>
            </div>
          </div>
          {getSectionThird}
        </div>
      </div>
    );
  }
}
