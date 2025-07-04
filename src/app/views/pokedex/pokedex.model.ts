export interface Pokemon {
  base_experience: number;
  abilities: [{
    ability: {
      name: string;
    };
  }];
  sprites: {
    front_default: string;
  };
  cries: {
    latest: string;
  };
}
