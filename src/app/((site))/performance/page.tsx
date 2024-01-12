import HeroImage from "@/app/components/heroimage/HeroImage"
import performanceImage from '/public/images/performance.jpg'

const PerformancePage = () => {
  return (
    <HeroImage
      imageUrl={performanceImage}
      imageAltText='An angle grinder in action spraying sparks'
      title='Blazing Fast Performance'
    />
  )
}

export default PerformancePage