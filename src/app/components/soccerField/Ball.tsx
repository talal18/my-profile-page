// components/SoccerComponents/Ball.tsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type BallProps = {
  shoot: boolean;
  onGoal: () => void; // Callback for when the ball reaches the goal
  position?: [number, number, number];
};

const Ball: React.FC<BallProps> = ({
  shoot,
  onGoal,
  position = [0, 0.5, 0],
}) => {
  const ballRef = useRef<any>();
  const goalZ = -5; // Set this to match the goal line position in your scene

  useFrame(() => {
    if (shoot && ballRef.current) {
      ballRef.current.position.z -= 0.1; // Moves the ball forward
      if (ballRef.current.position.z <= goalZ) {
        onGoal(); // Trigger the goal callback
        ballRef.current.position.z = position[2]; // Reset position after scoring
      }
    }
  });

  return (
    <mesh ref={ballRef} position={position}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Ball;
