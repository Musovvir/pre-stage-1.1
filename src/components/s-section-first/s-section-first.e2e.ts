import { newE2EPage } from '@stencil/core/testing';

describe('s-section-first', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-section-first></s-section-first>');

    const element = await page.find('s-section-first');
    expect(element).toHaveClass('hydrated');
  });
});
