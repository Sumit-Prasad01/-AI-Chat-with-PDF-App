'use-client'
import * as React from 'react';
import {Upload} from 'lucide-react'
const FileUplaoadComponent: React.FC = () =>{
    return (<div className='bg-slate-900 text-white shadow-2xl flex justify-center items-center p-4 rounded-lg '>
        <div className='flex justify-center items-center flex-col'>
            <h3>Upload a PDF file.</h3>
            <Upload/>
        </div>
        
    </div>);
};

export default FileUplaoadComponent;