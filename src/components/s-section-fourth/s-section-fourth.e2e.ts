import { newE2EPage } from '@stencil/core/testing';

describe('s-section-fourth', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-section-fourth></s-section-fourth>');

    const element = await page.find('s-section-fourth');
    expect(element).toHaveClass('hydrated');
  });
});
