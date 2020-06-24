import { newSpecPage } from '@stencil/core/testing';
import { SHeader } from './s-header';

describe('s-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SHeader],
      html: `<s-header></s-header>`,
    });
    expect(page.root).toEqualHtml(`
      <s-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-header>
    `);
  });
});
