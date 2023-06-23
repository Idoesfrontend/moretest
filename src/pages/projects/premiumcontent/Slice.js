import sliceBackgroundLarge from 'assets/newBack.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/newBack.jpg';

import { Footer } from 'components/Footer';

import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';

import styles from './Slice.module.css';

const title = 'Premium content?';
const description =
  'I have decided that I would like to maintain this YouTube channel as a hobby rather than a side business. I am too busy with my other business to run any sort of agency. However, some of you have asked me how to donate or give a tip, and I am always open to receiving money. So, if you enjoy the content and find it helpful, feel free to give a tip! All the money will be reinvested into the channel for purposes such as purchasing cameras, editing equipment, software, etc.';
const roles = ['Transparency', 'Honesty', 'Direct'];
const iframeStyle = {
  maxWidth: '500px',
  minWidth: '250px',
  maxHeight: 'none!important',
};
export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader title={title} description={description} url="" roles={roles} />

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <div>
                {' '}
                <script
                  src="https://donorbox.org/widget.js"
                  paypalExpress="false"
                  defer
                ></script>
                <iframe
                  src="https://donorbox.org/embed/nearshoreliving-donations?default_interval=o"
                  name="donorbox"
                  allowpaymentrequest="allowpaymentrequest"
                  seamless="seamless"
                  frameBorder="0"
                  scrolling="no"
                  height="900px"
                  width="100%"
                  style={iframeStyle}
                ></iframe>
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
