import { newSpecPage } from '@stencil/core/testing';
import { SCollaboration } from './s-collaboration';

describe('s-collaboration', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCollaboration],
      html: `<s-collaboration></s-collaboration>`,
    });
    expect(page.root).toEqualHtml(`
      <s-collaboration>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-collaboration>
    `);
  });
});
