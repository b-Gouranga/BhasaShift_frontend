export async function createImage(prompt: string): Promise<File> {
  const response = await fetch('http://localhost:5000/generate/image/assamese', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: prompt }),
  });

  if (!response.ok) {
    throw new Error('Image generation failed');
  }

  const blob = await response.blob();
  return new File([blob], 'generated.png', { type: blob.type });
}