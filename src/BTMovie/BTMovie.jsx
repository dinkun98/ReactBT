// import React from 'react'

import phims from './data.json'

export const BTMovie = () => {
    console.log('phims:', phims)
  return (
    <div className='container mt-3'>
        <h1>   BTMovie</h1>
     <div className='row'>
        {
            phims.map((phim) => {
                return <div key={phim.maPhim} className='col-3'>
                    <div className="card">
                        <img src={phim.hinhAnh} alt="..." />
                        <div className="card-body">
                            <p className='fs-3'>{phim.tenPhim}</p>
                        </div>
                    </div>
                </div>
            })
        }
     </div>
        </div>
  )
}
