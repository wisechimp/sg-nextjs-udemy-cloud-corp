import HeroImage from '../components/heroimage/HeroImage'
import homeImg from '/public/images/home.jpg'

const HomePage = () => {
  return(
    <div>
      <h1>Professional Cloud Hosting</h1>
      <HeroImage imageUrl={homeImg} imageAltText='A car sitting on a robotic production line' />
    </div>
  )
}

export default HomePage