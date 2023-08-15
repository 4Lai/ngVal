export interface GameModes {
  status: number;
  data: [
    {
      uuid: string;
      displayName: string;
      duration: string;
      allowsMatchTimeouts: boolean;
      isTeamVoiceAllowed: boolean;
      isMinimapHidden: boolean;
      orbCount: number;
      roundPerHalf: number;
      teamRoles: string[];
      gameFeatureOverrides: [
        {
          featureName: string;
          state: boolean;
        }
      ];
      gameRuleBoolOverrides: [
        {
          ruleName: string;
          state: boolean;
        }
      ];
      displayIcon: string;
      assetPath: string;
    }
  ];
}
