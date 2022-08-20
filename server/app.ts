import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';

const app: Express = express();
const baseurl = 'https://api.open5e.com/spells/?';

app.use(cors());

app.get('/api/spells/search', async (req: Request, res: Response) => {
  const extendedCards: any[] = [];
  const { query } = req;
  const data = await axios.get(
    `${baseurl}dnd_class__in_${query.class}=&format=json`
  );
  data.data.results = data.data.results.map((spell: any) => {
    if (spell.desc.length > 1000) {
      const newSpell = { ...spell };
      newSpell.name = `${newSpell.name}, contd.`;
      const { desc } = spell;
      const sentences = desc.split('.');
      const midPoint = Math.floor(sentences.length / 2);
      const descOne = sentences.slice(0, midPoint).join('.');
      const descTwo = sentences.slice(midPoint).join('.');

      spell.desc = descOne;
      newSpell.desc = descTwo;
      extendedCards.push(newSpell)
    }
    return spell;
  });
  const newData = [...data.data.results, ...extendedCards];
  newData.sort((a: any, b: any) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  console.log(newData)
  data.data.results = newData;
  res.send(data.data);
});

export default app;
