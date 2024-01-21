import {useMemo} from 'react';

import ImageWithProductHotspots from '~/components/media/ImageWithProductHotspots';
import ProductHero from '~/components/product/ProductHero';
import {
  SanityImageWithProductHotspots, SanityProductWithVariant,
} from '~/lib/sanity';

type Props = {
  mainItem?: SanityImageWithProductHotspots | SanityProductWithVariant;
};

export default function HeroMainItem({mainItem}: Props) {
  const heroMainItem = useMemo(() => {
    switch (mainItem?._type) {
      case 'imageWithProductHotspots': {
        return (
          <div className="relative w-full">
            <ImageWithProductHotspots content={mainItem} />
          </div>
        );
      }

      case 'productWithVariant': {
        if (!mainItem?.gid || !mainItem.variantGid) {
          return null;
        }

        return (
          <div className="aspect-[1300/768] w-full">
            <ProductHero gid={mainItem?.gid} variantGid={mainItem.variantGid} />
          </div>
        );
      }
    }
  }, [mainItem]);

  return (
    <div className="relative flex w-full place-content-center overflow-hidden rounded-md bg-lightGray">
      {heroMainItem}
    </div>
  );
}
