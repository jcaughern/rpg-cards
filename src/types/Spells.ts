import Spell from './Spell';

interface Spells {
  count: string;
  next: string;
  previous: string | null;
  results: Spell[];
}

export default Spells;
