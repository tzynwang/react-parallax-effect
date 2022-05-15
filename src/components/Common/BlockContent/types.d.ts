import { BLOCK_IN_VIEW } from '@Components/Common/Body';
import type { Ref } from '@Components/Common/Body/types';

export interface Section02Props {
  imgSrc: string;
  blockRef: React.MutableRefObject<HTMLDivElement | null>;
  inViewport?: boolean;
}
