import { newSpecPage } from '@stencil/core/testing';
import { STimeline } from './s-timeline';

describe('s-timeline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [STimeline],
      html: `<s-timeline></s-timeline>`,
    });
    expect(page.root).toEqualHtml(`
      <s-timeline>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-timeline>
    `);
  });
});
