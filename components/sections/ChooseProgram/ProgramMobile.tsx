import IconTriangle from '@/components/icons/IconTriangle'
import PopupProgram from '@/components/popups/PopupProgram'
import routes from '@/config/routes'
import styles from '@/styles/components/sections/ChooseProgram/Program.module.sass'
import classNames from 'classnames'
import Link from 'next/link'

export default function ProgramMobile({
  coursesFiltered,
  professionsFiltered,
  label,
  ofType,
  href,
  slug,
  index,
  setOpenListIndex,
  openListIndex
}) {
  const isListOpen = openListIndex === index

  const toggleList = () => {
    if (isListOpen) {
      // Если текущий список уже открыт, то закрываем его
      setOpenListIndex(-1)
    } else {
      // Если текущий список закрыт, то открываем его и закрываем другие
      setOpenListIndex(index)
    }
  }

  return (
    <div className={styles.directionsMobile}>
      <div onClick={toggleList} className={styles.item}>
        <span
          className={classNames({
            [styles.labelViolet]: isListOpen
          })}>
          {label}
        </span>
        <div
          className={classNames({
            [styles.rotateIcon]: isListOpen,
            [styles.icon]: !isListOpen
          })}>
          <IconTriangle />
        </div>
      </div>
      {isListOpen && (
        <>
          {ofType === 'course'
            ? coursesFiltered
                .filter((el, i) => i < 4)
                .map((program, i) => (
                  <PopupProgram
                    href={`${href}/${program.slug}`}
                    key={`${href}-${program.id}`}
                    program={program}
                  />
                ))
            : professionsFiltered
                .filter((el, i) => i < 4)
                .map((program, i) => (
                  <PopupProgram
                    href={`${href}/${program.slug}`}
                    key={`${href}-${program.id}`}
                    program={program}
                  />
                ))}
          {ofType === null ? (
            <Link
              href={`${routes.front.programs}/${slug}`}
              className={styles.viewAll}>
              Смотреть все
            </Link>
          ) : (
            <Link href={href} className={styles.viewAll}>
              Смотреть все
            </Link>
          )}
        </>
      )}
    </div>
  )
}
