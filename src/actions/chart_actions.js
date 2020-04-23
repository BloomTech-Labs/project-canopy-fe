export const CHART_COUNTS = 'CHART_COUNTS';

export const chartCounts = (filterBy) => dispatch => {
    const threatenedBreakdown = {
        vulnerable: [],
        endangered: [],
        critically_endangered: [],
        threatenedCounts: [],
        allCounts: []
    };

    filterBy.classes.map(taxClass => {
        threatenedBreakdown.threatenedCounts.push(taxClass.threatenedCount);
        threatenedBreakdown.allCounts.push(taxClass.speciesCount)
        taxClass.threatLevels.map(threatRanks => {
            if(threatRanks.rank === 'Critically Endangered'){
                threatenedBreakdown.critically_endangered.push(threatRanks.count)
            } else if (threatRanks.rank === 'Endangered'){
                threatenedBreakdown.endangered.push(threatRanks.count)
            } else if (threatRanks.rank === 'Vulnerable'){
                threatenedBreakdown.vulnerable.push(threatRanks.count)
            }
        })
    });
    console.log('checking the payload', threatenedBreakdown)
    dispatch({ type: CHART_COUNTS, payload: threatenedBreakdown})
};