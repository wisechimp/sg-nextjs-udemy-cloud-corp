import HeroImage from "@/app/components/heroimage/HeroImage"
import scaleImage from '/public/images/scale.jpg'

const ScalePage = () => {
  return (
    <HeroImage
      imageUrl={scaleImage}
      imageAltText='An image of a large industrial factory with large cranes and walkways.'
      title='Scale to Infinity... and Beyond!'
    />
  )
}

export default ScalePage