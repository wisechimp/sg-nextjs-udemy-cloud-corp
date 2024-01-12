import Image, { StaticImageData } from 'next/image'

type HeroImageProps = {
  imageUrl: StaticImageData,
  imageAltText: string
}

const HeroImage = ({imageUrl, imageAltText}: HeroImageProps) => {
  return (
    <div className='absolute -z-10 inset-0'>
      <Image src={imageUrl} alt={imageAltText} fill style={{ objectFit: 'cover'}} />
    </div>
  )
}

export default HeroImage