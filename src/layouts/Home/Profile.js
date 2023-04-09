import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hello Friend" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      You probably found me through my{' '}
      <Link href="https://www.youtube.com/channel/UCGEY_bIcC4N6AJqup-bPlmw">
        YouTube channel
      </Link>
      . The purpose of my channel is simply to document everything that I have learned
      from living overseas for most of my life. I am in my early 30s and I miss the days
      when the internet was a place to share useful knowledge instead of being bombarded
      constantly with ads and salespeople, as we are today. I have come to dislike the
      media telling me what to think and influencers supporting their biased point of view
      to try to sell me something.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I understand that we live in a globalized world and that we all have to make money.
      I wont hate the player, but I will hate the game. I strongly believe that certain
      things should be widely available and free for everyone. The ability to pack your
      bags and move somewhere else has been the foundation of human civilization. I want
      to share the knowledge that I have with you, with no bullsh*t.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Many people on YouTube and Twitter today will try to sell you the idea of moving
      abroad through fear. There are things to be afraid of today, such as CBDCs,
      overtaxation, and overreaching governments, but these people arent telling you the
      full story or giving you useful advice. They are simply giving you tailored advice
      to sell you the products and services available to them, not necessarily the ones
      you need.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="https://cal.com/nearshoreliving/paid-consultation"
                icon="send"
              >
                Book a Call
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me realaxing after a fewd days of hiking in western China and starring at the Tibet border which I am not allowed to cross into."
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
