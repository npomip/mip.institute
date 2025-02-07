import revalidate from '@/config/revalidate'
import routes from '@/config/routes'
import axios from 'axios'
import qs from 'qs'

// const queryString = qs.stringify(
//   {
//     populate: {
//       hero: {
//         populate: '*'
//       },
//       seo: {
//         populate: '*'
//       },
//       blocks: {
//         populate: '*',
//         on: {
//           'vacancies.repeatable-quote-with-title': {
//             populate: '*'
//           },
//           'shared.text-with-icon': {
//             populate: '*'
//           },
//           'vacancies.slider-with-image': {
//             populate: {
              
//               slider: {
//                 populate: '*'
//               },
//               img: {
//                 populate: '*'
//               }

//             }
//           },
//           'shared.rich-text': {
//             populate: '*'
//           },
//           'shared.rich-text-with-img': {
//             populate: '*'
//           },
//           'vacancies.slider-with-img': {
//             populate: '*'
//           },
//           'vacancies.recruitment': {
//             populate: {
//               recruiter: {
//                 populate: {
//                   image: {
//                     fields: ['url', 'width', 'height']
//                   }
//                 }
//               }
//             }
//           },
//           'blog.list-with-bg-and-title': {
//             populate: '*'
//           }
//         }
//       }
//     }
//   },
//   {
//     encodeValuesOnly: true,
//     skipNulls: true
//   }
// )

const queryString = qs.stringify(
  {
    populate: {
      incomersInfo: {
        populate: {
          img :{
            fields: ['url', 'width', 'height']
          }
        },

      },
      AdventureCards: {
        populate: {
          carousel: {
            populate: {
              slide: {
                populate: {
                  files: {
                    fields: ['url', 'width', 'height']
                  }
                }
              }
            }
          }
        }
      },
      MeetInstitute: {
        populate: '*'
      },
      studyProcess: {
        populate: '*'
      },
      programSelectionsTop: {
        populate: '*'
      },
      programSelectionsBottom: {
        populate: '*'
      },
      ourPossibilities: {
        populate: '*'
      },
      careerCenter: {
        populate: {
          img :{
            fields: ['url', 'width', 'height']
          }
        }
      },
    }
  },
  {
    encodeValuesOnly: true,
    skipNulls: true
  }
)
export const getStaticPropsIncomers = async () => {
  try {
    
    const response = await axios.get(`${routes.back.rootv2}/api/incomer?${queryString}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_BEARER}` // Замените на ваш токен
      }
    })
    
    return {
      props: {
        incomers: response?.data?.data || []
      },
      revalidate: revalidate.default
    }
  } catch (e) {
    console.log(e.response.data)
    return {
      props: {
        incomers: e.response.data || []
      },
    }
  }
}
