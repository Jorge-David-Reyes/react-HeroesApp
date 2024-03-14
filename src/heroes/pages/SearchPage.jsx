import { HeroCard } from '../components';

export const SearchPage = () => {
  return (
  <>
    <h1>Search</h1> 
    <hr />

    <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form >
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              // value={ searchText }
              // onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            ( q === '' )
              ? <div className="alert alert-primary">Search a hero</div>
              : ( heroes.length === 0 ) 
                && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
          } */}
          
          <div className="alert alert-primary animate__animated animate__fadeIn" 
              style={{ display: '' ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" 
              style={{ display: '' ? '' : 'none' }}>
            No hero with <b>{ '' }</b>
          </div>


          {/* {
            heroes.map( hero => (
              <HeroCard key={ hero.id } {...hero } />
            ))
          } */}

        </div>
    </div>
    

  </>
  )
}
