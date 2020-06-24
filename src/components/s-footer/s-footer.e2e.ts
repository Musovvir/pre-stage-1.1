import { newE2EPage } from '@stencil/core/testing';

describe('s-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-footer></s-footer>');

    const element = await page.find('s-footer');
    expect(element).toHaveClass('hydrated');
  });
});
