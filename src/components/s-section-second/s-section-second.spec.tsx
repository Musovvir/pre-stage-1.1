import { newSpecPage } from '@stencil/core/testing';
import { SSectionSecond } from './s-section-second';

describe('s-section-second', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SSectionSecond],
      html: `<s-section-second></s-section-second>`,
    });
    expect(page.root).toEqualHtml(`
      <s-section-second>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-section-second>
    `);
  });
});
