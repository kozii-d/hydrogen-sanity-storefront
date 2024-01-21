import clsx from 'clsx';

import LinkButton from '~/components/elements/LinkButton';
import HeroMainItem from '~/components/heroes/HeroMainItem';
import type {SanityHeroHome} from '~/lib/sanity';
import HeroAboutSection from "~/components/heroes/HeroAboutSection";

type Props = {
  hero: SanityHeroHome;
};

export default function HomeHero({hero}: Props) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center rounded-b-xl bg-peach px-4 pb-4 pt-24',
        'md:px-8 md:pb-8 md:pt-34',
      )}
    >
      {/* Title */}
      {hero.title && (
        <h1
          className={clsx(
            'mb-7 max-w-[60rem] whitespace-pre-line text-center text-3xl',
            'md:text-5xl',
          )}
        >
          {hero.title}
        </h1>
      )}

      {/* Link */}
      {hero.link && <LinkButton link={hero.link} />}

      {/* Hero content */}
      {hero.content && (
        <div
          className={clsx(
            'mt-6 w-full flex flex-col gap-5', //
            'md:mt-12',
          )}
        >
          {/* Main item */}
          {hero.content.mainItem && (
            <HeroMainItem mainItem={hero.content.mainItem} />
          )}

          {/* About section */}
          <HeroAboutSection content={hero.content.aboutSection}/>
        </div>
      )}
    </div>
  );
}
