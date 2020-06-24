import { newSpecPage } from '@stencil/core/testing';
import { SSectionFirst } from './s-section-first';

describe('s-section-first', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SSectionFirst],
      html: `<s-section-first></s-section-first>`,
    });
    expect(page.root).toEqualHtml(`
      <s-section-first>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-section-first>
    `);
  });
});
