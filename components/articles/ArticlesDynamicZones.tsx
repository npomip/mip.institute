import ArticleBlogBigSizeText from './ArticleBlogBigSizeText'
import ArticleBlogCommentBlock from './ArticleBlogCommentBlock'
import ArticleBlogList from './ArticleBlogList'
import ArticleBlogListWithBackgroundAndTitle from './ArticleBlogListWithBackgroundAndTitle'
import ArticleBlogListWithTitle from './ArticleBlogListWithTitle'
import ArticleBlogRelatedPrograms from './ArticleBlogRelatedPrograms'
import ArticleBlogSingleImageBlock from './ArticleBlogSingleImageBlock'
import ArticleBlogTable from './ArticleBlogTable'
import ArticleBlogTeacherComment from './ArticleBlogTeacherComment'
import ArticleBlogTextImageBlock from './ArticleBlogTextImageBlock'
import ArticleFullColoredTextBlock from './ArticleFullColoredTextBlock'
import ArticleSubtitle from './ArticleSubtitle'
import ArticleTextBlockWithBackground from './ArticleTextBlockWithBackground'

export default function ArticlesDynamicZones({ props }) {
  switch (props.__component) {
    case 'ComponentBlogTextImageBlock':
      return <ArticleBlogTextImageBlock props={props} />
    case 'ComponentBlogContentBlock':
      return <p>{props.content}</p>
    case 'blog.subtitle':
      return <ArticleSubtitle props={props} />
    case "blog.full-colored-text-block":
      return <ArticleFullColoredTextBlock props={props} />
    case "blog.text-block-with-bg":
      return <ArticleTextBlockWithBackground props={props} />
    case "shared.list-with-icon":
      return <ArticleBlogList props={props} />
    case 'ComponentBlogTeacherComment':
      return <ArticleBlogTeacherComment props={props} />
    case "blog.single-image-block":
      return <ArticleBlogSingleImageBlock props={props} />
    case "blog.comment-block":
      return <ArticleBlogCommentBlock props={props} />
    case "blog.list-with-title":
      return <ArticleBlogListWithTitle props={props} />
    case 'ComponentBlogRelatedPrograms':
      return <ArticleBlogRelatedPrograms props={props} />
    case "blog.list-with-bg-and-title":
      return <ArticleBlogListWithBackgroundAndTitle props={props} />
    case 'ComponentBlogBigSizeText':
      return <ArticleBlogBigSizeText props={props} />
    case 'ComponentBlogTable':
      return <ArticleBlogTable props={props} />
    default:
      break
  }
}
