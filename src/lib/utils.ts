import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPlaceholderImage(
  width: number,
  height: number,
  text?: string,
): string {
  const baseUrl = 'https://via.placeholder.com';
  const size = `${width}x${height}`;
  const textParam = text ? `&text=${encodeURIComponent(text)}` : '';
  return `${baseUrl}/${size}?bg=1F2937&text=Placeholder${textParam}`;
}
