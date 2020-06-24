import { newE2EPage } from '@stencil/core/testing';

describe('s-summary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-summary></s-summary>');

    const element = await page.find('s-summary');
    expect(element).toHaveClass('hydrated');
  });
});
