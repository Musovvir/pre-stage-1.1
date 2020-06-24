import { newE2EPage } from '@stencil/core/testing';

describe('s-timeline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-timeline></s-timeline>');

    const element = await page.find('s-timeline');
    expect(element).toHaveClass('hydrated');
  });
});
