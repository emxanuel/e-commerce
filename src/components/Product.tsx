import React from 'react'
import type { ProductType } from '../types/types'
import { Fade } from 'react-awesome-reveal'

interface Props {
    info: ProductType
}

const Product: React.FC<Props> = ({ info }) => {
    return (
        <Fade triggerOnce>
            <div className='flex flex-col items-center gap-3 shadow-sm shadow-neutral-500 h-full py-4'>
                <h2 className='text-center text-lg border-b-2'>{info.title.length < 35 ? info.title : info.title.slice(0, 31).concat('...')}</h2>
                <img className='w-4/12 object-contain h-full' src={info.image} alt="product image" />
                <div className='flex flex-col items-center border-t-2'>
                    <p>{`Rate: ${info.rating.rate}`}</p>
                    <p>{`Count: ${info.rating.count}`}</p>
                </div>
            </div>
        </Fade>
    )
}

export default Product