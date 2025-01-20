import stls from '@/styles/components/sections/ForWhom.module.sass'
import Wrapper from '@/ui/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import loadIcon from '@/helpers/general/loadIcon'

const ForWhom = () => {
  const { program } = useContext(ContextStaticProps)

  const subtitle = program?.forWhomSubtitle || ''

  const markdownContent = program?.ForWhom || ''

  const renderIcon = idx => {
    switch (idx) {
      case 0:
        return loadIcon('IconToTheMoon')
      case 1:
        return loadIcon('IconRemoteWork')
      default:
        return loadIcon('IconGettingup')
    }
  }

  const customRenderers = {
    ul: ({ children }) => <ul className={stls.list}>{children}</ul>,
    li: ({ node, ...props }) => {
      const index = node.position.start.line - 1
      return (
        <li className={stls.item}>
          <div className={stls.icon}>{renderIcon(index)}</div>
          <p className={stls.p}>{props.children}</p>
        </li>
      )
    }
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Для кого программа</h2>
        <div className={stls.subtitle}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{subtitle}</ReactMarkdown>
        </div>
        <ReactMarkdown components={customRenderers} rehypePlugins={[rehypeRaw]}>
          {markdownContent}
        </ReactMarkdown>
      </Wrapper>
    </section>
  )
}

export default ForWhom
