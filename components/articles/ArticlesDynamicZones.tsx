import styles from '@/styles/components/articles/ArticlesDynamicZones.module.sass'

export default function ArticlesDynamicZones({props}) {
  // console.log('DYNAMIC',props)

  switch(props.__typename) {
    case 'ComponentBlogTextBlock':
      return <p>{props.text}</p>
    case 'ComponentBlogContentBlock':
      return <p>{props.content}</p>
    default:
      break
  }
}