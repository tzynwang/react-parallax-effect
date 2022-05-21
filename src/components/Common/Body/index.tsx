import React, { memo, useRef, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { red, purple } from '@mui/material/colors';
import Image from '@Components/Base/Image';
import BodyBlock from '@Components/Common/BodyBlock';
import useScrollNegative from '@Hooks/useScrollNegative';
import useViewportHeight from '@Hooks/useViewportHeight';
import useWindowScrollTop from '@Hooks/useWindowScrollTop';
import type { BlocksInVP, TriggerPoints } from './types';

const BodyContainer = styled('div')(() => ({
  backgroundColor: purple[50],
}));

const ImageContainer = styled('div')(() => ({
  height: '300vh',
  width: '100%',
  position: 'relative',
  flex: '1 1 60%',
}));
const TextContainer = styled('div')(() => ({
  flex: '1 1 40%',
}));

const BLOCK_IN_VP: BlocksInVP = {
  ref01: false,
};

const TRIGGER_POINTS: TriggerPoints = {
  ref01: 0,
  ref02: 0,
  ref03: 0,
};

function Body(): React.ReactElement {
  // States
  const block01Ref = useRef<HTMLDivElement | null>(null);
  const [inVP, setInVP] = useState<BlocksInVP>(BLOCK_IN_VP);
  const [trigger, setTrigger] = useState<TriggerPoints>(TRIGGER_POINTS);
  const [currentSec, setCurrentSec] = useState<string>('');
  const scrollNegative = useScrollNegative();
  const vpHeight = useViewportHeight();
  const scrollTop = useWindowScrollTop();

  // Functions
  const handleScroll = (): void => {
    if (!block01Ref.current) {
      return;
    }
    if (
      block01Ref.current.getBoundingClientRect().top < 1 &&
      block01Ref.current.getBoundingClientRect().bottom > 1
    ) {
      setInVP({ ref01: true });
    } else {
      setInVP({ ref01: false });
    }
  };

  // Hooks
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [block01Ref.current]);
  useEffect(() => {
    if (block01Ref.current && vpHeight) {
      setTrigger({
        ref01: block01Ref.current.getBoundingClientRect().top,
        ref02: block01Ref.current.getBoundingClientRect().top + vpHeight,
        ref03: block01Ref.current.getBoundingClientRect().top + vpHeight * 2,
      });
    }
  }, [block01Ref.current, vpHeight]);
  useEffect(() => {
    if (scrollTop > trigger.ref03) {
      setCurrentSec('ref03');
    } else if (scrollTop > trigger.ref02) {
      setCurrentSec('ref02');
    } else if (scrollTop > trigger.ref01) {
      setCurrentSec('ref01');
    } else {
      setCurrentSec('');
    }
  }, [scrollTop, trigger]);

  // Main
  return (
    <BodyContainer>
      <BodyBlock bgColor={red[50]}>another block</BodyBlock>
      <div style={{ display: 'flex' }}>
        <ImageContainer ref={block01Ref}>
          <Image
            src="https://cdn.stocksnap.io/img-thumbs/960w/animals-feline_GWKZ6SI2ED.jpg"
            className="ref01"
            currentSec={currentSec}
            scrollNegative={scrollNegative}
            inVP={inVP.ref01}
          />
          <Image
            src="https://cdn.stocksnap.io/img-thumbs/960w/animals-cats_H2G3Y61IGJ.jpg"
            className="ref02"
            currentSec={currentSec}
          />
          <Image
            src="https://cdn.stocksnap.io/img-thumbs/960w/animals-cats_UCS90HFBJL.jpg"
            className="ref03"
            currentSec={currentSec}
          />
        </ImageContainer>
        <TextContainer>
          <div
            style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            quas eum, praesentium quod totam distinctio porro asperiores neque
            minima repellendus magnam dolor voluptate alias deleniti facilis
            dicta vel laborum illo?
          </div>
          <div
            style={{ height: '100vh', display: 'flex', alignItems: 'center' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            quas eum, praesentium quod totam distinctio porro asperiores neque
            minima repellendus magnam dolor voluptate alias deleniti facilis
            dicta vel laborum illo?
          </div>
          <div
            style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            quas eum, praesentium quod totam distinctio porro asperiores neque
            minima repellendus magnam dolor voluptate alias deleniti facilis
            dicta vel laborum illo?
          </div>
        </TextContainer>
      </div>
      <BodyBlock bgColor={red[50]}>another block</BodyBlock>
    </BodyContainer>
  );
}

export default memo(Body);
