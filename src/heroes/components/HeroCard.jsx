import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters}) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return ( alter_ego === characters )
     ? <></>
     : <p>{ characters }</p>;
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    // const heroImageUrl = `/assets/heroes/${ id }.jpg`;
    const heroImageUrl = `/heroes/${ id }.jpg`;

    // const charactesByHero =  (<p>{ characters }</p>);

  return (

        <div className="animate__animated animate__fadeInc card-columns">
            

            <div className="card shadow rounded mb-3">
                
                <Link to={`/hero/${ id }`}>
                    <div className="p-1">
                        <img src={ heroImageUrl } className="card-img-top" alt={ superhero } />
                    </div>
                </Link>
                
                <div className="card-body">
                    <h5 className="card-title">{ superhero }</h5>
                    <p className="card-text">{ alter_ego }</p>

                    {/* { ( alter_ego !== characters ) && charactesByHero ( alter_ego !== characters ) &&
                    <p>{ characters }</p>
                    } */}
                    <CharactersByHero characters={ characters } alter_ego={ alter_ego } />

                    <p className="card-text">
                        <small className="text-muted">{ first_appearance }</small>
                    </p>

                    <Link to={`/hero/${ id }`}>
                        Más..
                    </Link>
                </div>
            </div>     
        </div>

        


  )
}
