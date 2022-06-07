import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    cardColors: {
      Conjuration: string;
      Necromancy: string;
      Evocation: string;
      Abjuration: string;
      Transmutation: string;
      Divination: string;
      Enchantment: string;
      Illusion: string;
      default: string;
    };
  }
}
