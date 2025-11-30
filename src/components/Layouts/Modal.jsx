import React from 'react'

const Modal = ({ children, isOpen, onClose, title }) => {
    if(!isOpen) return null;
    return (
        <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/20 bg-opacity-50'>
            <div className='relative p-4 w-full max-w-2xl max-h-full'>
                <div className='relative bg-white rounded-lg shadow-sm dark:bg-gray-700'>
                    <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200'>
                        <h3 className='text-lg font-medium text-gray-900 dark:text-white'>{title}</h3>
                        <button
                            type="button"
                            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inLine-flex justify-center item-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            onClick={onClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" className='w-3 h-3' aria-hidden="true" viewBox="0 0 14 14">
                                <path 
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>

                        </button>
                    </div>
                    <div className='p-4 md:p-5 space-y-4 dark:text-white'>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
