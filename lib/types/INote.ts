export interface Note {
  id: string;
  title: string;
  content: string;
}

export interface NotesLimitResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number | null;
  pages: number | null;
  items: number | null;
  data: Note[];
}
