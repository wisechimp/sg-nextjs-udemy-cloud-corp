import HeroImage from '../components/heroimage/HeroImage'
import homeImg from '/public/images/home.jpg'

const HomePage = () => {
  return(
    <HeroImage 
      imageUrl={homeImg}
      imageAltText='A car sitting on a robotic production line'
      title="Professional Cloud Hosting"/>
  )
}

export default HomePage