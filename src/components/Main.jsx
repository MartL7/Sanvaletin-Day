import { useChangeElements } from '../hooks/changeElements'

export function Main () {

    const { handleButtonNo, handleButtonYes, textP, image, imageSpecial } = useChangeElements()

    return (
        <>
            <main className='max-w-3xl m-auto w-full h-screen text-center flex justify-center items-center'>

                <div className='flex justify-center items-center flex-col gap-2'>

                    <h1 className='font-sans font-bold text-gray-400 text-2xl'> 
                    Quieres ser mi San Valentin? </h1>

                    <img src={image} className='w-72'/>

                    <p className='font-mono text-yellow-100 flex justify-center flex-col items-center'>
                         {textP} 

                         <img src={imageSpecial} className='w-10 h-10 rounded-full'/>
                    </p>

                    <section className='flex gap-3'>

                        <button className='bg-blue-500 w-28 text-white font-bold py-2 px-4 rounded duration-500 transition-all hover:scale-110' onClick={handleButtonYes}> Si </button>

                        <button className='bg-red-500 w-20 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonNo}> No </button>
                    </section>

                </div>

            </main>
        </>
    )
}