export interface GunBuddies {
  status: number;
  data: [{
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: boolean;
    themeUuid: string;
    displayIcon: string;
    assetPath: string;
    levels: [{
      uuid: string;
      charmLevel: string;
      hideIfNotOwned: boolean;
      displayName: string;
      displayIcon: string;
      assetPath: string;
    }]
  }]
}
