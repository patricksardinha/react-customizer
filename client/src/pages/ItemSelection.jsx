import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation, fadeAnimation } from '../config/motion';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Backdrop from '../canvas/Backdrop'
import CameraRig from '../canvas/CameraRig'
import { CustomButton } from '../components';
import Item from '../canvas/Item';

import state from '../store';

import { customizableItems } from '../config/constants';



import Shirt from '../canvas/Shirt';
import config from '../config/config';

const ItemSelection = () => {
    // One current snapshot of that state
  const snap = useSnapshot(state);

  const cards = customizableItems.map((item) => (
    <motion.div 
      key={item.itemModel}
      className='selector'
      onClick={() => 
        (
          state.selector = false,
          state.customizer = true,
          state.currentItem = item.itemModel,
          state.currentFov = item.fov
        )}  
    >
      <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.itemTitle}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{item.itemDescription}</p>
        <div>
          <Canvas
            camera={{ position: [0, 0, 0], fov: item.fov }}
            gl={{ preserveDrawingBuffer: true }}
            className='w-10 h-10 transition-all ease-in'
          >
            <ambientLight intensity={0.5} />
            <Environment preset='city' />
            <CameraRig>
              <Center>
                <Item model={item.itemModel} />
              </Center>
            </CameraRig>
          </Canvas>
        </div>
      </a>
    </motion.div>
  ))

  return (
    <AnimatePresence>
      {snap.selector && (
        <>
          <motion.div>
            {cards}
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