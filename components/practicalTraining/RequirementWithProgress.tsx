import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/practicalTraining/RequirementsInProfession.module.sass'
import { TermPoint } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import marked from 'marked'
import { useEffect, useState } from 'react'
import TagOrange from '../general/TagOrange'
import Wrapper from '../layout/Wrapper'

// type Props = {
//   points: TermPoint[]
// }

const RequirementsWithProgress = ({ targetProgress, isActive, onComplete=null, id, text, onClick }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isActive) {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 1;
        setProgress(currentProgress);
        if (currentProgress >= targetProgress) {
          clearInterval(interval);
          onComplete?.(); // Оповещаем, что анимация завершена
        }
      }, 25); // Скорость анимации (в миллисекундах)
    }
  }, [isActive, targetProgress, onComplete]);

  return (
    <div className={stls.progressContainer} onClick={onClick}>
      <div className={stls.progressFill} style={{ width: `${progress}%` }}></div>
      <div className={stls.textWrapper}>
      <span>{text}</span>
      <span className={stls.progressText}>{progress} %</span>

      </div>
    </div>
  )
}

export default RequirementsWithProgress
