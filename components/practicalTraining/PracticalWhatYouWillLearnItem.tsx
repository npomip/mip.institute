import React, { useMemo } from 'react';
import stls from '@/styles/components/practicalTraining/PracticalWhatYouWillLearnItem.module.sass';
import { WhatYouWillLearnItem } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery';
import parse from 'html-react-parser';
import marked from 'marked';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery';

type Props = {
  block?: WhatYouWillLearnItem;
  number: number;
};

const PracticalWhatYouWillLearnItem = React.memo(({ block, number }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)');
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: `${isMobileAndTabletLayout ? '0px 0px -50% 0px' : '-20% 0px -50% 0px'}`,
    triggerOnce: false,
    delay: 200,
  });

  const renderer = new marked.Renderer();
  renderer.strong = text => `<span class=${stls.strongText}>${text}</span>`;
  marked.setOptions({ renderer });

  const parsedText = useMemo(() => {
    return block?.text ? parse(marked(block.text)) : null;
  }, [block]);

  return (
    <div 
      ref={ref} 
      className={classNames(stls.container, { [stls.visible]: inView, [stls.hidden]: !inView })}
      aria-live="polite"
    >
      <div className={stls.blockNumber}>
        <span className={stls.number}>0{number}</span>
      </div>
      <div className={stls.text}>
        {parsedText}
      </div>
    </div>
  );
});

export default PracticalWhatYouWillLearnItem;
