import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shoes = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shoes/shoe.gltf');

    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);

    // Apply the color smoothly
    //useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

    // Tracks state changes
    const stateStringShoes = JSON.stringify(snap);

    return (
        <group key={stateStringShoes}>
            <mesh castShadow geometry={nodes.shoe.geometry} material={materials.laces}></mesh>
            <mesh castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh}>
            {snap.isFullTexture && (
                <Decal
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                    scale={1}
                    map={fullTexture}
                />
            )}

            {snap.isLogoTexture && (
                <Decal
                    position={[0, 0.04, 0.15]}
                    rotation={[0, 0, 0]}
                    scale={0.15}
                    map={logoTexture}
                />
            )}
            </mesh>
            <mesh castShadow geometry={nodes.shoe_2.geometry} material={materials.caps}></mesh>
            <mesh castShadow geometry={nodes.shoe_3.geometry} material={materials.inner}></mesh>
            <mesh castShadow geometry={nodes.shoe_4.geometry} material={materials.sole}></mesh>
            <mesh castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes}></mesh>
            <mesh castShadow geometry={nodes.shoe_6.geometry} material={materials.band}></mesh>
            <mesh castShadow geometry={nodes.shoe_7.geometry} material={materials.patch}></mesh>
        </group>  
    )
}

export default Shoes