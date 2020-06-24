import { newSpecPage } from '@stencil/core/testing';
import { SSectionFourth } from './s-section-fourth';

describe('s-section-fourth', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SSectionFourth],
      html: `<s-section-fourth></s-section-fourth>`,
    });
    expect(page.root).toEqualHtml(`
      <s-section-fourth>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-section-fourth>
    `);
  });
});
