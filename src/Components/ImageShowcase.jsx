import React from 'react';

function ImageShowcase({ data, indexValue }) {
    return (
        <>
            {
                // Image show case card
                (indexValue + 1) % 2 === 0 ? (
                    // Conditionally render content if indexValue + 1 is even
                    <div className="row g-0">
                    <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: `url(${data.imageUrl})` }}></div>
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2>Updated For Bootstrap 5</h2>
                        <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
                ) : (
                    // Render content for odd index or default
                     <div className="row g-0">
                     <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(${data.imageUrl})` }}></div>
                     <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                         <h2>{data.headtext}</h2>
                         <p className="lead mb-0">{data.paraText}</p>
                     </div>
                 </div>
                )
            }
        </>
    );
}

export default ImageShowcase;