// components/SoccerField.tsx
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Player from "./Player";
import Ball from "../soccerField/Ball";
import Goal from "../soccerField/Goal";

// mock data
const players = [
  { id: 1, name: "Airmeez", position: [-2, 0.5, 2] },
  { id: 2, name: "QuickTo Solutions", position: [0, 0.5, 3] },
  { id: 3, name: "Ross Video", position: [2, 0.5, 2] },
];

const SoccerField: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [shooting, setShooting] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const handlePlayerClick = (player: any) => {
    setSelectedPlayer(player);
    setShooting(true); // Start the shot
  };

  const handleGoal = () => {
    setShooting(false); // Stop the shot
    setShowExperience(true); // Show experience after scoring
  };

  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Soccer Field */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 20]} />
        <meshStandardMaterial color="green" />
      </mesh>

      <Goal />

      {selectedPlayer && (
        <Ball
          shoot={shooting}
          onGoal={handleGoal}
          position={selectedPlayer.position}
        />
      )}

      {/* Render Players */}
      {players.map((player) =>
        selectedPlayer === null || selectedPlayer.id === player.id ? (
          <Player
            key={player.id}
            position={player.position}
            onClick={() => handlePlayerClick(player)}
          />
        ) : null
      )}

      {/* Experience Overlay */}
      {showExperience && selectedPlayer && (
        <div className="experience-overlay">
          <h3>{selectedPlayer.name}</h3>
          <p>{selectedPlayer.experience}</p>
          <button onClick={() => setShowExperience(false)}>Close</button>
        </div>
      )}
    </Canvas>
  );
};

export default SoccerField;
