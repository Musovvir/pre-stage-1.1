import { newE2EPage } from '@stencil/core/testing';

describe('s-section-third', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-section-third></s-section-third>');

    const element = await page.find('s-section-third');
    expect(element).toHaveClass('hydrated');
  });
});
