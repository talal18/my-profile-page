import React from "react";

interface PlayerProps {
  position: [number, number, number];
  onClick: () => void;
}

const Player: React.FC<PlayerProps> = ({ position, onClick }) => (
  <mesh position={position} onClick={onClick}>
    <sphereGeometry args={[0.3, 32, 32]} />
    <meshStandardMaterial color="blue" />
  </mesh>
);

export default Player;
