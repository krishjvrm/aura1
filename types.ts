
export interface Template {
  id: string;
  title: string;
  editor: 'VN' | 'CapCut';
  tags: string[];
  imageUrl: string;
  videoUrl: string;
  qrCodeUrl: string;
}
