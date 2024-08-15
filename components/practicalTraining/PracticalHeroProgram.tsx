import PopupTrigger from '@/components/general/PopupTrigger'
import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/practicalTraining/PracticalHeroProgram.module.sass'
import classNames from 'classnames'
import validTitles from 'constants/bachelorHeroProgram'
import { useContext, useState } from 'react'
import Breadcrumbs from '../general/Breadcrumbs'
import TBreadcrumb from '@/types/general/TBreadcrumb'
import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import PracticalProgramInfo from './PracticalProgramInfo'

type Props = {
  breadcrumbs: TBreadcrumb[]
  practicalTraining: PracticalTraining
}

const PracticalHeroProgram = ({ breadcrumbs, practicalTraining }: Props) => {

  const cta = 'signUp'

  return (
    <>
      <div
        className={stls.mobileBg}
        style={{
          backgroundImage: `url(${practicalTraining?.heroPicture?.url})`
        }}>
        <span className={stls.filter}></span>
        <div className={stls.content}>
          <div>
            <h1 className={stls.title}>
              {practicalTraining?.title}
            </h1>
            <div className={stls.mobileFlex}>
              <div className={stls.descriptionMobile}>
                <p className={stls.mobiledesc}>{practicalTraining?.subtitle}</p>
              </div>
            </div>
            <div className={stls.btnsMobile}>
              <PopupTrigger btn='alpha' cta={cta} />
              <PopupTrigger btn='beta' cta='askQuestion' />
            </div>
          </div>
        </div>
      </div>
      <div className={stls.info}>
        <PracticalProgramInfo practicalTraining={practicalTraining}/>
      </div>
      <section className={stls.container}>
        <Wrapper>
          <div
            className={stls.desktopBg}
            style={{
              backgroundImage: `url(${practicalTraining?.heroPicture?.url})`
            }}>
            <span className={stls.filter}></span>
            <div className={stls.heading}>
              <Breadcrumbs breadcrumbs={breadcrumbs} />
              <h1
                className={classNames({
                  [stls.title]: true,
                })}>
                {practicalTraining?.title}
              </h1>
              <div className={stls.descriptionDesktop}>
                <p className={stls.mobiledesc}>{practicalTraining?.subtitle}</p>
              </div>
              <div className={stls.btnsDesktop}>
                <PopupTrigger btn='alpha' cta='signUpForCourse' />
                <PopupTrigger btn='beta' cta='askQuestion' />
              </div>
                <PracticalProgramInfo practicalTraining={practicalTraining}/>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default PracticalHeroProgram
