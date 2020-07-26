/**
 * 加载方式
 * @author demo
 * @date 2020/5/29
 */

export enum layerLoadType {
    LOAD_TYPE_TILED = 'TILED', //切片
    LOAD_TYPE_DYNAMIC = 'DYNAMIC', //动态
    LOAD_TYPE_FEATURE = 'FEATURE', //要素
    LOAD_TYPE_FEATURE_GRAPHICS = 'FEATURE_GRAPHICS', //使用graphic的feature,前端本地
    LOAD_TYPE_WMS = 'WMS', //WMS
    LOAD_TYPE_WMTS = 'WMTS', //WMTS
    LOAD_TYPE_GRAPHICS = 'GRAPHICS', //graphic
    LOAD_TYPE_COUNTRY_TILED = 'COUNTRY_TILED', //国家切片
    DEFAULT_LOAD_TYPE = 'TILED' //切片
}
