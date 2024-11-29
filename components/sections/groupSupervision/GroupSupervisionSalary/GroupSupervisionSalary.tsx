import stls from '@/components/sections/groupSupervision/GroupSupervisionSalary/GroupSupervisionSalary.module.sass'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import SwiperCore from 'swiper'
import { Scrollbar } from 'swiper/modules'
import salary from 'constants/GroupSupervision/salary'
import firstBg from '@/public/assets/imgs/groupSupervision/Salary/mFirst.png'
import secondBg from '@/public/assets/imgs/groupSupervision/Salary/mSecond.png'
import thirdBg from '@/public/assets/imgs/groupSupervision/Salary/mThird.png'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'

SwiperCore.use([Scrollbar])

const GroupSupervisionSalary = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const blocks = [stls.block1, stls.block2, stls.block3]
  const backgrounds = [firstBg, secondBg, thirdBg]
  const backgroundOffsets = ['-47% 33%', '67% 26%', '75% 131%']

  return (
    <section className={stls.container}>
      <h2 className={stls.title}>
        Сколько&nbsp;
        <span className={stls.coloredTitle}>
          {isMobileAndTabletLayout ? (
            <>
              <br />
              может заработать
            </>
          ) : (
            'может заработать'
          )}
        </span>
        &nbsp; супервизор
      </h2>
      <div className={stls.blocks}>
        {salary.map((el, idx) => (
          <div
            className={classNames(blocks[idx], stls.column)}
            key={el.subTitle + idx}
            style={{
              backgroundImage: `url(${backgrounds[idx].src})`,
              objectFit: 'cover',
              backgroundSize: `${isMobileAndTabletLayout ? '600px' : '550px'}`,
              backgroundPosition: backgroundOffsets[idx],
              backgroundRepeat: 'no-repeat'
            }}>
            <p className={stls.subTitle}>{el.subTitle}</p>
            <span className={stls.salary}>
              {toNumberWithSpaces(el.salary)}
              &nbsp;руб.
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GroupSupervisionSalary
