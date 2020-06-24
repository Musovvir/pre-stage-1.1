import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSummaryItems} from "./interface/common.interface";

@Component({
  tag: 's-summary',
  styleUrl: 's-summary.css',
  shadow: false,
  scoped:true
})
export class SSummary implements ComponentInterface {
  /**
   * Интерфейс для Summary
   */
  @Prop() Summary: SSummaryItems[] = [];

  /**
   * Клик по Image
   */
  @Event() clickSummaryImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickSummarySubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickSummarySubtext: EventEmitter;

  @Prop() forSummary: any;

  render() {
    const getSummary = this.forSummary.map((item) => {
      return (
        <div class="row">
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickSummarySubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickSummarySubtext.emit("Subtext")}
            >
              {item.subtext}
            </div>
          </div>
          <div class="col-md-8 animate__animated animate__fadeInRight wow fadeInLeft">
            <div
              class="image"
              style={{ backgroundImage: "url(" + item.url + ")" }}
              onClick={() => this.clickSummaryImage.emit("Image")}
            />
          </div>
        </div>
      );
    });
    return (
      <div class="container">
        {getSummary}
      </div>
    );
  }

}
