import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { STimelineItems } from "./interface/common.interface";

@Component({
  tag: "s-timeline",
  styleUrl: "s-timeline.css",
  shadow: false,
  scoped: true,
})
export class STimeline implements ComponentInterface {
  /**
   * Интерфейс для Timeline
   */
  @Prop() Timeline: STimelineItems[] = [];

  /**
   * Клик по Timeline
   */
  @Prop() forTimeline: any;

  /**
   * Клик по Image
   */
  @Event() clickTimelineImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickTimelineSubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickTimelineSubtext: EventEmitter;

  render() {
    const getTimeline = this.forTimeline.map((item) => {
      return (
        <div class="row">
          <div class="col-md-8 animate__animated animate__fadeInLeft wow fadeInLeft">
            <div
              class="image"
              style={{ backgroundImage: "url(" + item.url + ")" }}
              onClick={() => this.clickTimelineImage.emit("Image")}
            />
          </div>
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickTimelineSubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickTimelineSubtext.emit("Subtext")}
            >
              {item.subtext}
            </div>
          </div>
        </div>
      );
    });
    return <div class="container">
      {getTimeline}
    </div>;
  }
}
