import React from "react";

const Goal: React.FC = () => (
  <mesh position={[0, 0, -5]}>
    <boxGeometry args={[2, 1, 0.1]} />
    <meshStandardMaterial color="white" />
  </mesh>
);

export default Goal;
