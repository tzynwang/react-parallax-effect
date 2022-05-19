import React, { memo, useRef, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { red, purple, amber } from '@mui/material/colors';
import BodyBlock from '@Components/Common/BodyBlock';
import { Section01, Section02 } from '@Components/Common/BlockContent';
import useScrollNegative from '@Hooks/useScrollNegative';
import useViewportHeight from '@Hooks/useViewportHeight';
import type { BlocksInVP, TriggerPoints } from './types';

const BodyContainer = styled('div')(() => ({
  paddingTop: '54px',
  backgroundColor: purple[50],
}));

const BLOCK_IN_VP: BlocksInVP = {
  ref01: false,
  ref02: false,
  ref03: false,
};

const TRIGGER_POINTS: TriggerPoints = {
  ref01: 0,
  ref02: 0,
  ref03: 0,
};

function Body(): React.ReactElement {
  // States
  const block01Ref = useRef<HTMLDivElement | null>(null);
  const block02Ref = useRef<HTMLDivElement | null>(null);
  const block03Ref = useRef<HTMLDivElement | null>(null);
  const [inVP, setInVP] = useState<BlocksInVP>(BLOCK_IN_VP);
  const [triggers, setTriggers] = useState<TriggerPoints>(TRIGGER_POINTS);
  const vpHeight = useViewportHeight();
  const toNegative = useScrollNegative();

  // Functions
  const handleScroll = (): void => {
    if (!block01Ref.current || !block02Ref.current || !block03Ref.current) {
      return;
    }
    if (
      block03Ref.current.getBoundingClientRect().top < 1 &&
      block03Ref.current.getBoundingClientRect().bottom > vpHeight * 0.75
    ) {
      setInVP({ ref01: false, ref02: false, ref03: true });
    } else if (
      block02Ref.current.getBoundingClientRect().top < 1 &&
      block02Ref.current.getBoundingClientRect().bottom > vpHeight * 0.1
    ) {
      setInVP({ ref01: false, ref02: true, ref03: false });
    } else if (
      block01Ref.current.getBoundingClientRect().top < 1 &&
      block01Ref.current.getBoundingClientRect().bottom > vpHeight * 0.1
    ) {
      setInVP({ ref01: true, ref02: false, ref03: false });
    } else {
      setInVP({ ref01: false, ref02: false, ref03: false });
    }
  };

  // Hooks
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [block01Ref.current, block02Ref.current, block03Ref.current, vpHeight]);
  useEffect(() => {
    if (inVP.ref03) {
      setTriggers({ ref01: 0, ref02: 0, ref03: window.scrollY });
    } else if (inVP.ref02) {
      setTriggers({ ref01: 0, ref02: window.scrollY, ref03: 0 });
    } else if (inVP.ref01) {
      setTriggers({ ref01: window.scrollY, ref02: 0, ref03: 0 });
    } else {
      setTriggers({ ref01: 0, ref02: 0, ref03: 0 });
    }
  }, [inVP.ref01, inVP.ref02, inVP.ref03]);

  // Main
  return (
    <BodyContainer>
      <BodyBlock bgColor={purple[50]}>
        <Section01 />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} ref={block01Ref} absoluteCenter>
        <Section02
          imgSrc="https://cdn.stocksnap.io/img-thumbs/960w/animals-feline_GWKZ6SI2ED.jpg"
          inViewport={inVP.ref01}
          offsetY={window.scrollY - triggers.ref01}
          toNegative={toNegative}
        />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} ref={block02Ref} absoluteCenter>
        <Section02
          imgSrc="https://cdn.stocksnap.io/img-thumbs/960w/animals-cats_H2G3Y61IGJ.jpg"
          inViewport={inVP.ref02}
          offsetY={window.scrollY - triggers.ref02}
          toNegative={toNegative}
        />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} ref={block03Ref} absoluteCenter>
        <Section02
          imgSrc="https://cdn.stocksnap.io/img-thumbs/960w/animals-cats_UCS90HFBJL.jpg"
          inViewport={inVP.ref03}
          offsetY={window.scrollY - triggers.ref03}
          toNegative={toNegative}
        />
      </BodyBlock>
      <BodyBlock bgColor={red[50]}>
        <div style={{ height: '150vh' }}>footer</div>
      </BodyBlock>
    </BodyContainer>
  );
}

export default memo(Body);
