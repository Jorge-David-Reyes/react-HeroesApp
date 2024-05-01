import { useMemo } from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="d-flex flex-wrap justify-content-around mb-3">
        {
            heroes.map( (hero) => (
                <HeroCard 
                    key={hero.id}
                    {...hero}
                />
            ))
        }
    </div>
  )
}
