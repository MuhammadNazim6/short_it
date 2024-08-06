import Hero from '../assets/images/pikaso_texttoimage_give-an-image-of-a-man-trying-to-shorten-a-link-or-removebg-preview (1).png'

const Banner = () => {
  return (
    <div className="hero h-auto flex flex-col lg:flex-row justify-between mt-8 px-4 sm:px-6 md:px-8 lg:px-20">
    <div className="hero-content text-start mb-8 lg:mb-0">
      <div className="max-w-md mx-auto lg:mx-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight sm:leading-tight md:leading-tight text-center lg:text-left">
          Make yOur LinKs shoRt, and yoUr reaCh endleSs.
        </h1>
      </div>
    </div>
    <div className="hero-content text-center">
      <div className="max-w-md mx-auto lg:mx-0">
        <img src={Hero} alt="Hero" className="w-full h-auto" />
      </div>
    </div>
  </div>  
  )
}

export default Banner