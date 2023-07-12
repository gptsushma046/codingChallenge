export interface newPayload {
    label: string;
    bands: Array<
          {
            name: string, 
            festivals: Array<{name:string}>
          }>;
  }
