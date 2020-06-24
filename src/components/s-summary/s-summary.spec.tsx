import { newSpecPage } from '@stencil/core/testing';
import { SSummary } from './s-summary';

describe('s-summary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SSummary],
      html: `<s-summary></s-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <s-summary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-summary>
    `);
  });
});
