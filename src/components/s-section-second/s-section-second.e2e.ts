import { newE2EPage } from '@stencil/core/testing';

describe('s-section-second', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-section-second></s-section-second>');

    const element = await page.find('s-section-second');
    expect(element).toHaveClass('hydrated');
  });
});
