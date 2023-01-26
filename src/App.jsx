import heroIllustration from './images/illustration-hero.svg';
import musicIcon from './images/icon-music.svg';

function App() { 
  return (
    <div className="w-full h-screen bg-blue-100 flex items-center justify-center relative">
      <div className="w-full h-full absolute bottom-1/2  bg-bg-pattern-mob sm:bg-bg-pattern-des bg-cover bg-no-repeat"></div>
      <div className="bg-white rounded-xl w-80 sm:w-96 z-10">
        <div>
          <img className='rounded-t-xl' src={heroIllustration} alt="hero-illustration" />
        </div>
        <div className="px-8 py-4 font-medium">
          <div className="text-center">
            <h1 className="text-3xl font-bold sm:font-black">Order Summary</h1>
            <p className="text-gray-400 p-3">
              You can now listen to millions of songs, audiobooks, and podcasts on any 
              device anywhere you like!
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg flex items-center justify-between my-6">
            <div className='flex items-center gap-2'>
              <div className=''>
                <img src={musicIcon} alt="music-icon" />
              </div>
              <div>
                <b>Annual Plan</b>
                <p className='text-gray-400'>$59.99/year</p>
              </div>
            </div>
            <button className="underline hover:no-underline text-purple-700">change</button>
          </div>
          <div>
            <button className="text-white bg-purple-700 hover:bg-purple-700/90 rounded-lg w-full py-2 shadow-[0_15px_10px_2px_#32032f30]">Proceed to Payment</button>
            <button className='w-full text-purple-700 mt-8 font-bold'>Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
