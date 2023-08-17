import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation, fadeAnimation } from '../config/motion';

import state from '../store';
import { CustomButton } from '../components';

const ItemSelection = () => {
    // One current snapshot of that state
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.selector && (
        <>
          <motion.div 
            key='selector'
            className='selector'
            onClick={() => 
              (
                state.selector = false,
                state.customizer = true
              )}  
          >
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </a>
          </motion.div>

          {/* Back button top right */}
          <motion.div
            className='absolute z-10 top-5 right-5'
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => 
                (
                  state.intro = true,
                  state.selector = false
                )}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ItemSelection