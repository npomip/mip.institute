import axios from "axios"
import qs from "qs"

// test token strapi v 5 
const token = '6ff024a59190ab47ac120b09d6f0457c407b4e7167da87393c213b7bc37f9078bbe52875f46d273168befc38e46bd2ce7055af7495b77d0f5d464f8c9b03620c2b9c670c0f9f72b2e52ef63bc7152e3da940dd205e0468597b9165d28f580d00aea1bec6212874f30aa0d02b56dcc5929ce9fd6df20c559fdd570bc31b7a11c5'

const queryString = qs.stringify(
  {
    filters: {
      slug: 'chikagskaya-semerka-psihosomaticheskih-zabolevanij-i-ih-prichiny',
    },
    populate: {
      picture: {
        fields: ['url', 'width', 'height']
      },
      // blogAuthor: {
      //   populate: {
      //     portrait: {
      //       fields: ['url', 'width', 'height']
      //     }
      //   },
      //   fields: ['name', 'position']
      // },
      // teacher: {
      //   populate: {
      //     portrait: {
      //       fields: ['url', 'width', 'height']
      //     },
      //     portraitForBlog: {
      //       fields: ['url', 'width', 'height']
      //     }
      //   },
      //   fields: ['name', 'position', 'achievements', 'achievementsJournal']
      // },
      // seo: {
      //   fields: ['metaTitle', 'metaDescription']
      // },
      article: {
        populate: '*'
        // populate: {
        //   // textImageBlock: {
        //   //   fields: ['text'],
        //   //   populate: {
        //   //     image: {
        //   //       fields: ['url', 'width', 'height']
        //   //     }
        //   //   }
        //   // },
        //   subtitle: {
        //     fields: ['subtitle', 'subtitleSlug', 'color']
        //   },
        //   // bigSizeText: {
        //   //   fields: ['text', 'textColor']
        //   // },
        //   // fullColoredTextBlock: {
        //   //   fields: ['text', 'textColor']
        //   // },
        //   // list: {
        //   //   populate: {
        //   //     listItem: {
        //   //       fields: ['id', 'text', 'icon']
        //   //     }
        //   //   }
        //   // },
        //   // listWithTitle: {
        //   //   populate: {
        //   //     item: {
        //   //       fields: ['id', 'title', 'text', 'icon']
        //   //     }
        //   //   },
        //   //   fields: ['icon']
        //   // },
        //   // singleImageBlock: {
        //   //   fields: ['alternativeText'],
        //   //   populate: {
        //   //     picture: {
        //   //       fields: ['url', 'width', 'height']
        //   //     }
        //   //   }
        //   // },
        //   // commentBlock: {
        //   //   fields: ['text', 'lineColor']
        //   // },
        //   // textBlockWithBackground: {
        //   //   fields: ['text', 'backgroundColor', 'borderColor', 'textColor']
        //   // },
        //   // listWithBackgroundAndTitle: {
        //   //   fields: ['title', 'backgroundColor', 'lineColor', 'icon'],
        //   //   populate: {
        //   //     item: {
        //   //       fields: ['id', 'text', 'icon']
        //   //     }
        //   //   }
        //   // },
        //   // relatedPrograms: {
        //   //   fields: ['title', 'borderColor'],
        //   //   populate: {
        //   //     textItem: {
        //   //       fields: ['id', 'text']
        //   //     },
        //   //     programs: {
        //   //       fields: ['id', 'title', 'slug', 'studyFieldSlug', 'type'],
        //   //       populate: {
        //   //         heroPicture: {
        //   //           fields: ['url', 'width', 'height']
        //   //         }
        //   //       }
        //   //     }
        //   //   }
        //   // },
        //   // table: {
        //   //   populate: {
        //   //     row: {
        //   //       populate: {
        //   //         record: {
        //   //           fields: ['id', 'text']
        //   //         }
        //   //       }
        //   //     }
        //   //   }
        //   // },
        //   // teacherComment: {
        //   //   fields: ['specialization', 'comment', 'borderColor'],
        //   //   populate: {
        //   //     teacher: {
        //   //       fields: ['name', 'specialization'],
        //   //       populate: {
        //   //         portrait: {
        //   //           fields: ['url', 'width', 'height']
        //   //         }
        //   //       }
        //   //     }
        //   //   }
        //   // }
        // }
      }
    }
  },
  // {
  //   encodeValuesOnly: true,
  //   skipNulls: true,
  // }
)
export const getJournalDatav5axios = async () => {
try {
  const {data} = await axios.get(`http://localhost:1338/api/blogs?${queryString}`, {
    headers: {
      'Authorization': `Bearer ${token}`, // Замените на ваш токен
    },
  })

  return data
}catch(e){
  console.log(e)}

}