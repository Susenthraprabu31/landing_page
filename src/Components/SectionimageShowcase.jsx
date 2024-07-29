import React from 'react'
import ImageShowcase from './ImageShowcase'
import showCase1 from '../assets/img/bg-showcase-1.jpg'
import showCase2 from '../assets/img/bg-showcase-2.jpg'
import showCase3 from '../assets/img/bg-showcase-3.jpg'

function sectionImageShowcase() {
    // Image show case data
    let data = [
        {
            imageUrl:showCase1,
            headtext:"Fully Responsive Design",
            paraText:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
        },
        {
            imageUrl:showCase2,
            headtext:"Updated For Bootstrap 5",
            paraText:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
        },
        {
            imageUrl:showCase3,
            headtext:"Easy to Use & Customize",
            paraText:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
        }
    ]
  return (
    <>
    {/* image shohw case section container */}
        <section className="showcase">
            <div className="container-fluid p-0">
               {
                 data.map((item, index) => (
                    <ImageShowcase data={item} indexValue={index} key={index}/>
                 ))
               }
            </div>
        </section>
    </>
  );
}

export default sectionImageShowcase