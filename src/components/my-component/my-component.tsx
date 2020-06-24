import { Component, h } from "@stencil/core";
import {
  forFooter,
  forHeader,
  forSectionFirst,
  forSectionFourth,
  forSectionSecond,
  forSectionThird,
  forCollaboration,
  forReview,
  forStaffing,
  forTimeline,
  forSummary,
} from "../../utils/mock";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
  scoped: true,
})
export class MyComponent {
  render() {
    const clicker = (item) => {
      console.log(item);
    };
    return (
      <div>
        <s-header
          forHeader={forHeader}
          onClickHeaderLogo={(item) => clicker(item)}
          onClickHeaderHome={(item) => clicker(item)}
          onClickHeaderFeatures={(item) => clicker(item)}
          onClickHeaderHowItWorks={(item) => clicker(item)}
          onClickHeaderAboutUs={(item) => clicker(item)}
          onClickHeaderSignIn={(item) => clicker(item)}
        />
        <s-section-first
          forSectionFirst={forSectionFirst}
          onClickSectionFirstText={(item) => clicker(item)}
          onClickSectionFirstSubtext={(item) => clicker(item)}
          onClickSectionFirstButton={(item) => clicker(item)}
          onClickSectionFirstImage={(item) => clicker(item)}
        />
        <s-section-second
          forSectionSecond={forSectionSecond}
          onClickSectionSecondTitle={(item) => clicker(item)}
          onClickSectionSecondSubtitle={(item) => clicker(item)}
          onClickSectionSecondMyBlock={(item) => clicker(item)}
        />
        <s-section-third
          forSectionThird={forSectionThird}
          onClickSectionThirdImage={(item) => clicker(item)}
          onClickSectionThirdSubtitle={(item) => clicker(item)}
          onClickSectionThirdSubtext={(item) => clicker(item)}
          onClickSectionThirdTitle={(item) => clicker(item)}
          onClickSectionThirdText={(item) => clicker(item)}
        />
        <s-collaboration
          forCollaboration={forCollaboration}
          onClickCollaborationImage={(item) => clicker(item)}
          onClickCollaborationSubtitle={(item) => clicker(item)}
          onClickCollaborationSubtext={(item) => clicker(item)}
        />
        <s-review
          forReview={forReview}
          onClickReviewImage={(item) => clicker(item)}
          onClickReviewSubtitle={(item) => clicker(item)}
          onClickReviewSubtext={(item) => clicker(item)}
        />
        <s-staffing
          forStaffing={forStaffing}
          onClickStaffingImage={(item) => clicker(item)}
          onClickStaffingSubtitle={(item) => clicker(item)}
          onClickStaffingSubtext={(item) => clicker(item)}
        />
        <s-timeline
          forTimeline={forTimeline}
          onClickTimelineImage={(item) => clicker(item)}
          onClickTimelineSubtitle={(item) => clicker(item)}
          onClickTimelineSubtext={(item) => clicker(item)}
        />
        <s-summary
          forSummary={forSummary}
          onClickSummaryImage={(item) => clicker(item)}
          onClickSummarySubtitle={(item) => clicker(item)}
          onClickSummarySubtext={(item) => clicker(item)}
        />
        <s-section-fourth
          forSectionFourth={forSectionFourth}
          onClickSectionFourthTitle={(item) => clicker(item)}
          onClickSectionFourthImage={(item) => clicker(item)}
          onClickSectionFourthText={(item) => clicker(item)}
          onClickSectionFourthButton={(item) => clicker(item)}
        />
        <s-footer
          forFooter={forFooter}
          onClickFooterFacebook={(item) => clicker(item)}
          onClickFooterIn={(item) => clicker(item)}
          onClickFooterCopyright={(item) => clicker(item)}
        />
      </div>
    );
  }
}
