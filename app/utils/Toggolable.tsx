import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import Prose from './Prose';

interface Props {
    title: string;
    children: React.ReactNode;
    maxHeight: number;
    restProps?: any;
}

export default function Toggolable({ children, title, maxHeight = 3000, ...restProps }: Props) {
    const [open, setOpen] = useState(false);
    return (
        <div className='mt-4'>
            <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                <Prose>
                    <h2 className='flex flex-row gap-2'>
                        <div className='my-auto'>
                            {open ? <AiOutlineUp /> : <AiOutlineDown />}
                        </div>
                        {title}
                    </h2>
                </Prose>
            </div>
            <div style={
                {
                    maxHeight: open ? maxHeight.toString() + 'px' : '0px',
                    overflow: 'hidden',
                    transitionDuration: '1s',
                    transitionProperty: 'max-height',
                    transitionTimingFunction: 'ease-in-out'
                }
            }
                className='rounded-lg'
            >
                {children}
            </div>

        </div>
    )
}