import community from '/images/13.jpg'
import philosophy from '/images/14.jpg'
import history from '/images/15.jpg'

const Data: {
  id: number
  image: string
  title: string
  description: string
}[] = [
  {
    id: 1,
    image: community,
    title: 'Our Community',
    description:
      'The classes bring people from all around the world together to practice Shroinji Kempo. Providing a safe and welcoming environment to develop students skills. The instructors teach discipline and cooperation alongside the practices of martial arts. This is a non profit organization where instructors volunteer to teach students and develop a strong community.',
  },
  {
    id: 2,
    image: philosophy,
    title: 'Philosophy',
    description: `"The person, the person, the person. Everything depends on the quality of the person. "Our founder, So Doshin believed that real peace is achieved by making individuals with "strong senses of charity, courage, and justice!" Thus Shorinji Kempo was born. We believe through the practice of Shorinji Kempo and acquiring healthy bodies, indomitable courage, and well-rounded character will lead to So Doshin's belief.`,
  },
  {
    id: 3,
    image: history,
    title: 'History',
    description:
      'Shorinji Kempo BC began in Vancouver by Masaaki Hashimoto Sensi who is now the director of Shorinji Kempo Canada. Hashimoto Sensi established a dojo in Vancouver, 1982. This dojo was the beginning of our journey developing students and growing community. In 1989 a second Vancouver branch would open, providing more lessons and hosting Vancouver seminars for many years to come. In 2002 the BC Tozenji Branch was officially established as the third dojo.',
  },
]

export default Data
