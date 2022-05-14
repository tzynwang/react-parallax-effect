import React, { memo, createRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { red, purple, amber } from '@mui/material/colors';
import BodyBlock from '@Components/Common/BodyBlock';
import { Section01, Section02 } from '@Components/Common/BlockContent';
import useViewportHeight from '@Hooks/useViewportHeight';

const BodyContainer = styled('div')(() => ({
  paddingTop: '54px',
  backgroundColor: purple[50],
}));

function Body(): React.ReactElement {
  // States
  const section01Ref = createRef<HTMLDivElement>();
  const section02Ref = createRef<HTMLDivElement>();
  const section03Ref = createRef<HTMLDivElement>();
  const viewportHeight = useViewportHeight();

  // full document height
  useEffect(() => {
    // TODO: for output testing, remove later
    console.info('full document height: ', document.body.scrollHeight);
  }, [document.body.scrollHeight]);

  // viewport height
  useEffect(() => {
    // TODO: for output testing, remove later
    console.info('viewport height: ', viewportHeight);
  }, [viewportHeight]);

  // Hooks
  useEffect(() => {
    if (section01Ref.current && section02Ref.current && section03Ref.current) {
      console.info(
        section01Ref.current.getBoundingClientRect().top,
        section01Ref.current.getBoundingClientRect().height
      );
      console.info(
        section02Ref.current.getBoundingClientRect().top,
        section02Ref.current.getBoundingClientRect().height
      );
      console.info(
        section03Ref.current.getBoundingClientRect().top,
        section03Ref.current.getBoundingClientRect().height
      );
    }
  }, [section01Ref.current, section02Ref.current, section03Ref.current]);

  // Main
  return (
    <BodyContainer>
      <BodyBlock bgColor={purple[50]}>
        <Section01 />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} absoluteCenter>
        <Section02 ref={section01Ref} />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} absoluteCenter>
        <Section02 ref={section02Ref} />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} absoluteCenter>
        <Section02 ref={section03Ref} />
      </BodyBlock>
      <BodyBlock bgColor={red[50]}>
        <div>footer</div>
      </BodyBlock>
    </BodyContainer>
  );
}

export default memo(Body);
