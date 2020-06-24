import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SStaffingItems } from "./interface/common.interface";

@Component({
  tag: "s-staffing",
  styleUrl: "s-staffing.css",
  shadow: false,
  scoped: true,
})
export class SStaffing implements ComponentInterface {
  /**
   * Интерфейс для Staffing
   */
  @Prop() Staffing: SStaffingItems[] = [];

  /**
   * Клик по Image
   */
  @Event() clickStaffingImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickStaffingSubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickStaffingSubtext: EventEmitter;

  @Prop() forStaffing: any;

  render() {
    const getStaffing = this.forStaffing.map((item) => {
      return (
        <div class="row">
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickStaffingSubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickStaffingSubtext.emit("Subtext")}
            >
              {item.subtext}
            </div>
          </div>
          <div class="col-md-8 animate__animated animate__fadeInRight wow fadeInLeft">
            <div
              class="image"
              style={{ backgroundImage: "url(" + item.url + ")" }}
              onClick={() => this.clickStaffingImage.emit("Image")}
            />
          </div>
        </div>
      );
    });
    return <div class="container">{getStaffing}</div>;
  }
}
