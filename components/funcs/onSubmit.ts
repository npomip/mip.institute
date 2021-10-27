import hitContactRoute from '@/components/funcs/hitContactRoute'

const onSubmit = async data => {
  // handle loader
  // handle data
  // handle utms
  console.log(data)
  const req = await hitContactRoute(data)
  if (req === 200) {
    console.log('Success')
  } else {
    console.log('err')
  }
}

export default onSubmit
