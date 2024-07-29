import React from 'react'

function IconsGrid({data}){
    
  return (<>
    <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex"><i className={data.iconClassName}></i></div>
                    <h3>{data.headText}</h3>
                    <p className="lead mb-0">{data.paraText}</p>
                </div>
            </div>
        </>
  )
}

export default IconsGrid