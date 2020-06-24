import { newSpecPage } from '@stencil/core/testing';
import { SFooter } from './s-footer';

describe('s-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SFooter],
      html: `<s-footer></s-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <s-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-footer>
    `);
  });
});
