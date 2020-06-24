import { newSpecPage } from '@stencil/core/testing';
import { SSectionThird } from './s-section-third';

describe('s-section-third', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SSectionThird],
      html: `<s-section-third></s-section-third>`,
    });
    expect(page.root).toEqualHtml(`
      <s-section-third>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-section-third>
    `);
  });
});
