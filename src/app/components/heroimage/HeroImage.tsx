import Image, { StaticImageData } from 'next/image'

type HeroImageProps = {
  imageUrl: StaticImageData,
  imageAltText: string,
  title: string
}

const HeroImage = ({imageUrl, imageAltText, title}: HeroImageProps) => {
  return (
    <div className='relative h-screen'>
      <div className='absolute -z-10 inset-0'>
        <Image
          src={imageUrl}
          alt={imageAltText}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900' />
      </div>
      <div className='pt-48 flex justify-center items-center'>
        <h1 className='text-primaryLight text-6xl'>{title}</h1>
      </div>
    </div>
  )
}

export default HeroImage