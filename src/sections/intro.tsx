import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/Addons.js";
import { Suspense, useRef } from "react";
import { Mesh } from "three";

const Model = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  const materials = useLoader(
    MTLLoader,
    "/assets/laptop/desktop_shortwires.mtl"
  );
  materials.preload();

  const obj = useLoader(
    OBJLoader,
    "/assets/laptop/desktop_shortwires.obj",
    (loader) => {
      loader.setMaterials(materials);
    }
  );

  return (
    <group ref={meshRef} position={[0, 0, 0]} rotation={[Math.PI / 9, 0, 0]}>
      <primitive object={obj} scale={7.5} position={[0, 0, -2]} />
    </group>
  );
};

const Intro = () => {
  return (
    <div
      id={"intro"}
      className="Intro flex flex-col md:flex-row justify-center mt-15 mb-35 items-center gap-10 md:gap-25 px-5"
    >
      <motion.div
        className="kodchasan-bold text-white text-center text-5xl md:text-6xl md:text-left "
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Hello,
        <br /> Im <span className="animate-highlight">Jun Qin</span>
        <div className="font-['Karla', serif] text-xl mt-4">
          Fellow passionate developer invested in the field
        </div>
      </motion.div>
      <div className="w-90 h-90 md:w-100 md:h-100 lg:w-130 lg:h-130 -mt-15">
        <Canvas>
          <ambientLight intensity={10} color={"darkblue"} />
          <pointLight position={[0, 0, 3]} intensity={5} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Suspense fallback={<Text>Loading...</Text>}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Intro;
