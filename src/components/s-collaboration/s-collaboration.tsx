import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SCollaborationItems } from "./interface/common.interface";

@Component({
  tag: "s-collaboration",
  styleUrl: "s-collaboration.css",
  shadow: false,
  scoped: true,
})
export class SCollaboration implements ComponentInterface {
  /**
   * Интерфейс для Collaboration
   */
  @Prop() sectionThird: SCollaborationItems[] = [];

  /**
   * Клик по Image
   */
  @Event() clickCollaborationImage: EventEmitter;

  /**
   * Клик по Subtitle
   */
  @Event() clickCollaborationSubtitle: EventEmitter;

  /**
   * Клик по Subtext
   */
  @Event() clickCollaborationSubtext: EventEmitter;

  @Prop() forCollaboration: any;

  render() {
    const getCollaboration = this.forCollaboration.map((item) => {
      return (
        <div class="row">
          <div class="col-md-4">
            <div
              class="subtitle"
              onClick={() => this.clickCollaborationSubtitle.emit("Subtitle")}
            >
              {item.subtitle}
            </div>
            <div
              class="subtext"
              onClick={() => this.clickCollaborationSubtext.emit("Subtext")}
            >
              {item.subtext}
            </div>
          </div>
          <div class="col-md-8 animate__animated animate__fadeInRight wow fadeInLeft">
            <div
              class="image"
              style={{ backgroundImage: "url(" + item.url + ")" }}
              onClick={() => this.clickCollaborationImage.emit("Image")}
            />
          </div>
        </div>
      );
    });
    return <div class="container">{getCollaboration}</div>;
  }
}
