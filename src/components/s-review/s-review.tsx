import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SReviewItems } from "./interface/common.interface";

@Component({
  tag: "s-review",
  styleUrl: "s-review.css",
  shadow: false,
  scoped: true,
})
export class SReview implements ComponentInterface {
  /**
   * Интерфейс для SReviewItems
   */
  @Prop() Review: SReviewItems[] = [];

  /**
   * Массив для Review
   */
  @Prop() forReview: any;

  /**
   * Клик по Image
   */
  @Event() clickReviewImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickReviewSubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickReviewSubtext: EventEmitter;

  render() {
    const getReview = this.forReview.map((item) => {
      return (
        <div class="row">
          <div class="col-md-8 animate__animated animate__fadeInLeft wow fadeInLeft">
            <div
              class="image"
              style={{ backgroundImage: "url(" + item.url + ")" }}
              onClick={() => this.clickReviewImage.emit("Image")}
            />
          </div>
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickReviewSubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickReviewSubtext.emit("Subtext")}
            >
              {item.subtext}
            </div>
          </div>
        </div>
      );
    });
    return <div class="container">{getReview}</div>;
  }
}
