const tdtMapToken = '993470e78cc4324e1023721f57b23640'; //token
const subDomains = ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']; //服务器

const mapConstant: any = (window as any).mapConstant;
console.log("window 2:", window)
export default {
    countryLayerInfo: [
        {
            id: mapConstant.MAP_TYPE_DLG,
            layerUrl:
                'http://{subDomain}.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&FORMAT=tiles&tk=' +
                tdtMapToken,
            subDomains: subDomains,
            layerType: mapConstant.MAP_TYPE_DLG,
            isTagLayer: 0,
            layerName: '国家矢量地图服务',
            loadType: mapConstant.LOAD_TYPE_COUNTRY_TILED,
            isShow: true, //是否有效
            priority: mapConstant.FIRST //优先级 为后面图层加载层次设计
        },
        {
            id: mapConstant.MAP_TYPE_DLG,
            layerUrl:
                'http://{subDomain}.tianditu.gov.cn/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&FORMAT=tiles&tk=' +
                tdtMapToken,
            subDomains: subDomains,
            layerType: mapConstant.MAP_TYPE_DLG,
            isTagLayer: 1,
            layerName: '国家矢量注记地图服务',
            loadType: mapConstant.LOAD_TYPE_COUNTRY_TILED,
            isShow: true,
            priority: mapConstant.FIRST
        },
        {
            id: mapConstant.MAP_TYPE_DOM,
            layerUrl:
                'http://{subDomain}.tianditu.gov.cn/img_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&FORMAT=tiles&tk=' +
                tdtMapToken,
            subDomains: subDomains,
            layerType: mapConstant.MAP_TYPE_DOM,
            isTagLayer: 0,
            layerName: '国家影像地图服务',
            loadType: mapConstant.LOAD_TYPE_COUNTRY_TILED,
            isShow: true,
            priority: mapConstant.FIRST
        },
        {
            id: mapConstant.MAP_TYPE_DOM,
            layerUrl:
                'http://{subDomain}.tianditu.gov.cn/cia_c/wmts?&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&FORMAT=tiles&tk=' +
                tdtMapToken,
            subDomains: subDomains,
            layerType: mapConstant.MAP_TYPE_DOM,
            isTagLayer: 1,
            layerName: '国家影像注记地图服务',
            loadType: mapConstant.LOAD_TYPE_COUNTRY_TILED,
            isShow: true,
            priority: mapConstant.FIRST
        },
        {
            id: mapConstant.MAP_TYPE_DEM,
            layerUrl:
                'http://{subDomain}.tianditu.gov.cn/ter_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&FORMAT=tiles&tk=' +
                tdtMapToken,
            subDomains: subDomains,
            layerType: mapConstant.MAP_TYPE_DEM,
            isTagLayer: 0,
            layerName: '国家晕渲地图服务',
            loadType: mapConstant.LOAD_TYPE_COUNTRY_TILED,
            isShow: true,
            priority: mapConstant.FIRST
        },
        {
            id: mapConstant.MAP_TYPE_DEM,
            layerUrl:
                'http://{subDomain}.tianditu.gov.cn/cta_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&FORMAT=tiles&tk=' +
                tdtMapToken,
            subDomains: subDomains,
            layerType: mapConstant.MAP_TYPE_DEM,
            isTagLayer: 1,
            layerName: '国家晕渲注记地图服务',
            loadType: mapConstant.LOAD_TYPE_COUNTRY_TILED,
            isShow: true,
            priority: mapConstant.FIRST
        }
    ]
};
