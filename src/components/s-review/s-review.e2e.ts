import { newE2EPage } from '@stencil/core/testing';

describe('s-review', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-review></s-review>');

    const element = await page.find('s-review');
    expect(element).toHaveClass('hydrated');
  });
});
