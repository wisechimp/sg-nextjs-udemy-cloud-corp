import HeroImage from "@/app/components/heroimage/HeroImage"
import performanceImage from '/public/images/performance.jpg'

const PerformancePage = () => {
  return(
    <div>
      <h1>Blazing Fast Performance</h1>
      <HeroImage imageUrl={performanceImage} imageAltText="An angle grinder in action spraying sparks" />
    </div>
  )
}

export default PerformancePage