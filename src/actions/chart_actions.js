import axios from 'axios';
const url = process.env.REACT_APP_BACKENDURL
    ? process.env.REACT_APP_BACKENDURL
    : "http://localhost:5000";

export const ALL_COUNTS = 'ALL_COUNTS';
export const COUNTRY_COUNTS = 'COUNTRY_COUNTS';

export const countryCounts = (country) => dispatch => {
    axios.get(`${url}/th_s/countryClassCounts`)
        .then(res => {
            res.data.map(item => {
                if(item.country.toLowerCase() === country.toLowerCase()){
                    const threatenedBreakdown = {
                        vulnerable: [],
                        endangered: [],
                        critically_endangered: [],
                        threatenedCounts: [],
                        allCounts: []
                    };
                    item.threatendClasses.map(threatClass => {
                        threatenedBreakdown.threatenedCounts.push(threatClass.threatendCount);
                        threatClass.threatLevels.map(threatRanks => {
                            if(threatRanks.rank === 'Critically Endangered'){
                                threatenedBreakdown.critically_endangered.push(threatRanks.count)
                            } else if (threatRanks.rank === 'Endangered'){
                                threatenedBreakdown.endangered.push(threatRanks.count)
                            } else if (threatRanks.rank === 'Vulnerable'){
                                threatenedBreakdown.vulnerable.push(threatRanks.count)
                            }
                        })
                    });
                    axios.get(`${url}/th_s/allCountryClassCount`)
                        .then(resp => {
                            resp.data.map(item => {
                                if(item.country.toLowerCase() === country.toLowerCase()){
                                    threatenedBreakdown.allCounts = item.classes.map(taxClass => {
                                        return taxClass.speciesCount
                                    })
                                }
                            })
                            dispatch({ type: COUNTRY_COUNTS, payload: threatenedBreakdown})
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
};

export const allCounts = () =>  dispatch => {
    axios.get(`${url}/th_s/classcount`)
        .then(res => {
            const threatCounts = res.data.threatenedCounts.map(eaClass => {
                return eaClass.threatenedCount
            })
            const all_counts = res.data.allSpeciesCounts.map(eaClass => {
                return eaClass.classCount
            })
            const threatenedBreakdown = {
                vulnerable: [],
                endangered: [],
                critically_endangered: []
            };
            res.data.threatenedCounts.map(eaClass => {
                eaClass.threatLevels.map(threat => {
                    if(threat.rank === 'Critically Endangered'){
                        threatenedBreakdown.critically_endangered.push(threat.count)
                    } else if (threat.rank === 'Endangered'){
                        threatenedBreakdown.endangered.push(threat.count)
                    } else if (threat.rank === 'Vulnerable'){
                        threatenedBreakdown.vulnerable.push(threat.count)
                    }
                })
            })
           
            dispatch({ type: ALL_COUNTS, payload: {
                threatCounts,
                all_counts,
                threatenedBreakdown,
            }})
        })
        .catch(err => {
            console.log(err)
        })
};