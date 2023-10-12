export const shuffle = (mcqOptions) => {
  for (let i = mcqOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mcqOptions[i], mcqOptions[j]] = [mcqOptions[j], mcqOptions[i]];
  }
  return mcqOptions;
};


export const difficultyStars = (level) => {
  switch (level) {
    case "easy":
      return "★";
    case "medium":
      return "★★";
    case "hard":
      return "★★★";
    default:
      return "";
  }
};