import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SSectionThirdItems } from "./interface/common.interface";
import {StorageViskhanSbank} from "../../../../../utils/utils";

@Component({
  tag: "cnt-flexy-view-viskhan-sbank-structure",
  styleUrl: "cnt-flexy-view-viskhan-sbank-structure.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewViskhanSbankStructure implements ComponentInterface {
  /**
   * Массив для Structure
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Structure
   */
  @Prop() sectionThird: SSectionThirdItems[] = [];

  /**
   * Клик по Image
   */
  @Event() clickStructureImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickStructureSubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickStructureSubtext: EventEmitter;

  /**
   * Клик по Title
   */
  @Event() clickStructureTitle: EventEmitter;

  /**
   * Клик по Text
   */
  @Event() clickStructureText: EventEmitter;

  componentDidRender() {
    // @ts-ignore
    AOS.init();
  }

  render() {
    const getSectionThird = this.payload.map((item) => {
      return (
        <div class="row">
          <div class="col-md-8">
            <div
              data-aos="fade-right"
              class="image"
              style={{ backgroundImage: "url(" + StorageViskhanSbank.prefix + item.url + ")" }}
              onClick={() => this.clickStructureImage.emit("Image")}
            />
          </div>
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickStructureSubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickStructureSubtext.emit("Subtext")}
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
                onClick={() => this.clickStructureTitle.emit("Title")}
              >
                How it works
              </div>
              <div
                class="text"
                onClick={() => this.clickStructureText.emit("Text")}
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
