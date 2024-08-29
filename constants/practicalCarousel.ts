import src1 from 'public/assets/imgs/practicalCarousel/Frame 40051.jpg'
import src2 from 'public/assets/imgs/practicalCarousel/Frame 40050.jpg'

const card1 = {
    id: 2,
    title: 'Практические навыки психологического консультирования. 2 ступень',
    admissionDate: 'в разработке',
    slug: 'second-step',
    duration: '/',
    programPicture1: {
        url: src1.src,
        height: src1.height,
        width: src1.width,
    }
}

const card2 = {
    id: 3,
    title: 'Практические навыки психологического консультирования. 3 ступень',
    admissionDate: 'в разработке',
    slug: 'third-step',
    duration: '/',
    programPicture1: {
        url: src2.src,
        height: src2.height,
        width: src2.width,
    }
}

export {card1, card2}