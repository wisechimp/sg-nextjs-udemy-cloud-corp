import HeroImage from "@/app/components/heroimage/HeroImage"
import reliabilityImage from '/public/images/reliability.jpg'

const ReliabilityPage = () => {
  return(
    <div>
      <h1>
        Reliability is our Number 1 Priority
      </h1>
      <HeroImage imageUrl={reliabilityImage} imageAltText="Some guy doing some sort of welding type thing. It's not actually easy to see what he's up but he has a welding facemask but no gloves!?!" />
    </div>
  )
}

export default ReliabilityPage