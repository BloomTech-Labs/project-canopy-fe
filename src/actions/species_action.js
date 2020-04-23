export const FILTER_SPECIES = 'FILTER_SPECIES';

export const setSpeciesData = (filterBy) => dispatch => {
    const threatened = [];
    const allSpecies = [];
    
    filterBy.classes.map(taxClass => {
        taxClass.threatenedSpecies.map(animal => {
            threatened.push(animal)
        })
        taxClass.species.map(animal => {
            allSpecies.push(animal)
        })
    });
   
    dispatch({ type: FILTER_SPECIES, payload: {threatened, allSpecies} })
};

