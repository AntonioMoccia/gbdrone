import React,{useEffect,useState,Suspense} from 'react'
import {
    Hero,
    HeroButton,
    TextHero
} from './styled'
import useScroll from '../../hooks/useScroll'
import {useLocation, useHistory} from 'react-router-dom'
import './style.scss'
function Index({media, text, buttonText,parallaxActive}) {
      const {scrollY,Mobile} = useScroll()
        const history=useHistory()
        const [infImage,setInfImage] = useState({})

        useEffect(()=>{
          const image = document.querySelector('#hero > img');

        if(image){
              if(parallaxActive){
                image.style.minHeight = '170vh'          
              }else{
                image.style.Height = '105vh'
              }
          }else{
          }

        },[media])
        
        
        useEffect(()=>{
          const image = document.querySelector('#hero > img');
                if(image && parallaxActive){
                  
                  image.style.transform = `translateY(${scrollY/2.5}px)` 
                }


        },[media,scrollY])

        const video = document.querySelector('.video-hero')
        useEffect(()=>{

          if(video){
            video.play()
            video.controls=false
          }

        },[video])
      return (
<>
{
media && (

    <div className='hero-wrapper'>


  {
     media && media[0]?._type=="image" ? (
       <img className='image-hero' src={media[0]?.url}/>
     ) : (

       <video src={media[0]?.url}  className='video-hero' muted playsInline loop >

       </video>

     )
   }
     <TextHero  parallax={scrollY}>{text}</TextHero>

{
    buttonText? (
     <HeroButton onClick={()=>{history.push('/services')}}>
         {buttonText}
      </HeroButton>
    ):(null)
}
</div>

)
}
</>
    )
}

export default Index
