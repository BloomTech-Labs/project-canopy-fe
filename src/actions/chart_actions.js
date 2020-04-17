import axios from 'axios';
const url = process.env.REACT_APP_BACKENDURL
    ? process.env.REACT_APP_BACKENDURL
    : "http://localhost:5000";

export const ALL_COUNTS = 'ALL_COUNTS';

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
                    }else if(threat.rank === 'Endangered'){
                        threatenedBreakdown.endangered.push(threat.count)
                    }else if(threat.rank === 'Vulnerable'){
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
}