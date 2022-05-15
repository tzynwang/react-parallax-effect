import React, { memo, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { red, purple, amber } from '@mui/material/colors';
import BodyBlock from '@Components/Common/BodyBlock';
import { Section01, Section02 } from '@Components/Common/BlockContent';
import useIsInViewport from '@Hooks/useIsInViewport';

export enum BLOCK_IN_VIEW {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
}

const BodyContainer = styled('div')(() => ({
  paddingTop: '54px',
  backgroundColor: purple[50],
}));

function Body(): React.ReactElement {
  // States
  const block01Ref = useRef<HTMLDivElement | null>(null);
  const block02Ref = useRef<HTMLDivElement | null>(null);
  const block03Ref = useRef<HTMLDivElement | null>(null);
  const block01inVP = useIsInViewport(block01Ref);
  const block02inVP = useIsInViewport(block02Ref);
  const block03inVP = useIsInViewport(block03Ref);

  // Main
  return (
    <BodyContainer>
      <BodyBlock bgColor={purple[50]}>
        <Section01 />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} ref={block01Ref} absoluteCenter>
        <Section02
          imgSrc="https://cdn.stocksnap.io/img-thumbs/960w/animals-feline_GWKZ6SI2ED.jpg"
          blockRef={block01Ref}
          inViewport={block01inVP}
        />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} ref={block02Ref} absoluteCenter>
        <Section02
          imgSrc="https://cdn.stocksnap.io/img-thumbs/960w/animals-cats_H2G3Y61IGJ.jpg"
          blockRef={block02Ref}
          inViewport={block02inVP}
        />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} ref={block03Ref} absoluteCenter>
        <Section02
          imgSrc="https://cdn.stocksnap.io/img-thumbs/960w/animals-cats_UCS90HFBJL.jpg"
          blockRef={block03Ref}
          inViewport={block03inVP}
        />
      </BodyBlock>
      <BodyBlock bgColor={red[50]}>
        <div style={{ height: '150vh' }}>footer</div>
      </BodyBlock>
    </BodyContainer>
  );
}

export default memo(Body);
