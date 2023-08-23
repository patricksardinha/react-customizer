import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import { useSnapshot } from 'valtio';

import Shirt from './Shirt'
import Item from './Item';
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'
import Shoes from './Shoes'

import state from '../store';
import { AnimatePresence } from 'framer-motion';

import { customizableItems } from '../config/constants';

const CanvasModel = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      { snap.customizer && (<Canvas
                              shadows
                              camera={{ position: [0, 0, 0], fov: customizableItems.fov }}
                              gl={{ preserveDrawingBuffer: true }}
                              className='w-full max-w-full h-full transition-all ease-in'
                            >
                              <ambientLight intensity={0.5} />
                              <Environment preset='city' />

                              <CameraRig>
                                <Backdrop />
                                <Center>
                                  <Item model={snap.currentItem} />
                                </Center>
                              </CameraRig>
                            </Canvas>
      )}
    </AnimatePresence>
  )
}

export default CanvasModel