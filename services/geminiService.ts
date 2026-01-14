// Gemini / Google GenAI integration removed.
// This stub preserves the same API so the site remains functional
// while removing direct calls to Google's GenAI library.

export const sendMessageToGemini = async (
  history: { role: string; text: string }[],
  message: string
): Promise<string> => {
  // Return a friendly fallback message indicating the feature is disabled.
  return `AI assistant is currently disabled.`;
};
