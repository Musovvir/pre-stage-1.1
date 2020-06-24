import { newSpecPage } from '@stencil/core/testing';
import { SReview } from './s-review';

describe('s-review', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SReview],
      html: `<s-review></s-review>`,
    });
    expect(page.root).toEqualHtml(`
      <s-review>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-review>
    `);
  });
});
