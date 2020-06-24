import { newSpecPage } from '@stencil/core/testing';
import { SStaffing } from './s-staffing';

describe('s-staffing', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SStaffing],
      html: `<s-staffing></s-staffing>`,
    });
    expect(page.root).toEqualHtml(`
      <s-staffing>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-staffing>
    `);
  });
});
