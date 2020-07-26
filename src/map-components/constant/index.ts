import { mapView } from './map-view';
import { layerType } from './layer-type';
import { layerLoadType } from './layer-load-type';
import { layerPriority } from './layer-priority';
import { geoType } from './geo-type';

export default {
    ...mapView,
    ...layerType,
    ...layerLoadType,
    ...layerPriority,
    ...geoType
};
