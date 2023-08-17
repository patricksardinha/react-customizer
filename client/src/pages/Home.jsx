import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';

import state from '../store';
import { CustomButton } from '../components';

const Home = () => {
  // One current snapshot of that state
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>

          <motion.div className='home-content' {...headContainerAnimation}>

            <motion.header className='' {...slideAnimation('down')}>
              <img src='./spray-paint.png' alt='logo' className='w-16 h-16 object-contain'/>
            </motion.header>
            <motion.div>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden' /> DO IT.
              </h1>
            </motion.div>

            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Customize the design of your next clothes and fashion accessory according to your 
                <strong> own imagination</strong>.
              </p>
            </motion.div>

            <CustomButton
               type="filled" 
               title="Customize It" 
               handleClick={() => 
                (
                  state.intro = false,
                  state.selector = true
                )}
               customStyles="w-fit m-10 px-4 py-2.5 font-bold text-sm"
            />

          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home