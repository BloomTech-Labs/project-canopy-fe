export const congoPoints =  {
    'type': 'circle',
    filter: ['!', ['has', 'point_count']],
    'paint': {
        'circle-radius': 7,
        'circle-color': '#223b53',
        'circle-stroke-color': 'white',
        'circle-stroke-width': 1,
        'circle-opacity': 0.5
    }
};
export const clusterLayer = {
    id: 'clusters',
    type: 'circle',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
      'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
    }
  };
  export const clusterCountLayer = {
    id: 'cluster-count',
    type: 'symbol',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
    }
  };