import HeroImage from "@/app/components/heroimage/HeroImage"
import scaleImage from '/public/images/scale.jpg'

const ScalePage = () => {
  return(
    <div>
      <h1>Scale to Infinity... and Beyond!</h1>
      <HeroImage imageUrl={scaleImage} imageAltText="An image of a large industrial factory with large cranes and walkways." />
    </div>
  )
}

export default ScalePage