export interface IMeta {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] }> | undefined;
}
