import dynamic from 'next/dynamic'

// Универсальная функция для загрузки и отображения иконки
const loadIcon = (iconName: string, props?: Record<string, any>) => {
  const IconComponent = dynamic(
    () => import(`@/components/icons/${iconName}`),
    {
      ssr: false
    }
  )

  return <IconComponent {...props} />
}

export default loadIcon
