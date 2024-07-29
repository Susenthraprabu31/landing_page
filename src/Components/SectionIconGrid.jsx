import React from 'react';
import IconGridComponent from './IconsGrid';

function SectionIconGrid() {
    let data = [
        {
            iconClassName: 'bi-window m-auto text-primary',
            headText: 'Fully Responsive',
            paraText: 'This theme will look great on any device, no matter the size!'
        },
        {
            iconClassName: 'bi-layers m-auto text-primary',
            headText: 'Bootstrap 5 Ready',
            paraText: 'Featuring the latest build of the new Bootstrap 5 framework!'
        },
        {
            iconClassName: 'bi-terminal m-auto text-primary',
            headText: 'Easy to Use',
            paraText: 'Ready to use with your own content, or customize the source files!'
        }
    ];

    return (
        <>
            {/* <!-- Icons Grid--> */}
            <section className="features-icons bg-light text-center">
                <div className="container">
                    <div className="row">
                        {
                            data.map((item, index) => (
                                <IconGridComponent key={index} data={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionIconGrid;