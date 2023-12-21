import React, {useEffect} from  'react';
import Navbar from './Navbar';


export default function Homepage() {

  useEffect(() => {
    const lettersMichael = document.querySelectorAll('.Michael span');
    const lettersShand = document.querySelectorAll('.Shand span');

    lettersMichael.forEach((letter, index) => {
      (letter as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
    });
    lettersShand.forEach((letter, index) => {
      (letter as HTMLElement).style.animationDelay = `${1+ 0.1 * (index + 1)}s`;
    });
  }, []);


  return (
    <div className="Homepage">
      <Navbar />
      <div className="HomepageContent">
        <div className="animatedName">
          <div className='Michael' id='animatedText'>
            <span>M</span>
            <span>I</span>
            <span>C</span>
            <span>H</span>
            <span>A</span>
            <span>E</span>
            <span>L</span>
          </div>
          <div className='Shand' id='animatedText'>
            <span>S</span>
            <span>H</span>
            <span>A</span>
            <span>N</span>
            <span>D</span>
          </div>
        </div>
        <div className='headshot'>
          <img src='https://media.licdn.com/dms/image/D4E03AQHgWPikx9NhLA/profile-displayphoto-shrink_400_400/0/1697043212519?e=2147483647&v=beta&t=MrvzAeLyJ67PxBL5VzKBcacZ96LK5LSri5PYrBHEo5g' alt='My Headshot'/>
        </div>
      </div>
    </div>

  )


}