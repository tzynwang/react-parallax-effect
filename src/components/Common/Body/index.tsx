import React, { memo, createRef, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { red, purple, amber } from '@mui/material/colors';
import BodyBlock from '@Components/Common/BodyBlock';
import { Section01, Section02 } from '@Components/Common/BlockContent';
import mathRoundTwoDecimal from '@Tools/mathRoundTwoDecimal';

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
  const block01Ref = createRef<HTMLDivElement>();
  const block02Ref = createRef<HTMLDivElement>();
  const block03Ref = createRef<HTMLDivElement>();
  const [refTops, setRefTops] = useState<number[]>([]); // percentage
  const [refBottoms, setRefBottoms] = useState<number[]>([]); // percentage

  // Hooks
  useEffect(() => {
    if (block01Ref.current && block02Ref.current && block03Ref.current) {
      setRefTops([
        mathRoundTwoDecimal(
          block01Ref.current.getBoundingClientRect().top /
            document.body.scrollHeight
        ),
        mathRoundTwoDecimal(
          block02Ref.current.getBoundingClientRect().top /
            document.body.scrollHeight
        ),
        mathRoundTwoDecimal(
          block03Ref.current.getBoundingClientRect().top /
            document.body.scrollHeight
        ),
      ]);
      setRefBottoms([
        mathRoundTwoDecimal(
          block01Ref.current.getBoundingClientRect().bottom /
            document.body.scrollHeight
        ),
        mathRoundTwoDecimal(
          block02Ref.current.getBoundingClientRect().bottom /
            document.body.scrollHeight
        ),
        mathRoundTwoDecimal(
          block03Ref.current.getBoundingClientRect().bottom /
            document.body.scrollHeight
        ),
      ]);
    }
  }, [block01Ref.current, block02Ref.current, block03Ref.current]);

  // Main
  return (
    <BodyContainer>
      <BodyBlock bgColor={purple[50]}>
        <Section01 />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} ref={block01Ref} absoluteCenter>
        <Section02
          topPercentage={refTops[0]}
          bottomPercentage={refBottoms[0]}
        />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} ref={block02Ref} absoluteCenter>
        <Section02
          topPercentage={refTops[1]}
          bottomPercentage={refBottoms[1]}
        />
      </BodyBlock>
      <BodyBlock bgColor={amber[100]} ref={block03Ref} absoluteCenter>
        <Section02
          topPercentage={refTops[2]}
          bottomPercentage={refBottoms[2]}
        />
      </BodyBlock>
      <BodyBlock bgColor={red[50]}>
        <div>footer</div>
      </BodyBlock>
    </BodyContainer>
  );
}

export default memo(Body);
