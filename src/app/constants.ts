// Stagger animation for children to move up
export const containerVariantsMoveUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3, // Staggering each child element by 0.3s
    },
  },
};

// Stagger animation for children to move down
export const containerVariantsMoveDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3, // Staggering each child element by 0.3s
    },
  },
};

// Stagger animation for children to right
export const containerVariantsMoveRight = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3, // Staggering each child element by 0.3s
    },
  },
};

export const itemVariantsMoveUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const itemVariantsMoveDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export const itemVariantsMoveRight = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
};
