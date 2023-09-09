export interface Events {
  status: number;
  data: [{
    uuid: string;
    displayName: string;
    shortDisplayName: string;
    startTime: string;
    endTime: string;
    assetPath: string;
  }]
}
