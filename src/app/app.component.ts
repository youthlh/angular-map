import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import { appService } from './app.service';
import echarts from 'echarts';
import 'echarts-gl'; //3D地图
import 'echarts/map/js/china';//china
import 'echarts/map/js/province/anhui';//安徽
import 'echarts/map/js/province/aomen';//澳门
import 'echarts/map/js/province/beijing';//北京
import 'echarts/map/js/province/chongqing';//重庆
import 'echarts/map/js/province/fujian';//福建
import 'echarts/map/js/province/gansu';//甘肃
import 'echarts/map/js/province/guangdong';//广东
import 'echarts/map/js/province/guangxi';//广西
import 'echarts/map/js/province/guizhou';//海南
import 'echarts/map/js/province/hainan';//贵州
import 'echarts/map/js/province/hebei';//河北
import 'echarts/map/js/province/heilongjiang';//黑龙江
import 'echarts/map/js/province/henan';//河南
import 'echarts/map/js/province/hubei';//湖北
import 'echarts/map/js/province/hunan';//湖南
import 'echarts/map/js/province/jiangsu';//江苏
import 'echarts/map/js/province/jiangxi';//江西
import 'echarts/map/js/province/jilin';//吉林
import 'echarts/map/js/province/liaoning';//辽宁
import 'echarts/map/js/province/neimenggu';//内蒙古
import 'echarts/map/js/province/ningxia';//宁夏
import 'echarts/map/js/province/qinghai';//青海
import 'echarts/map/js/province/shandong';//山东
import 'echarts/map/js/province/shanghai';//上海
import 'echarts/map/js/province/shanxi';//山西
import 'echarts/map/js/province/shanxi1';//陕西
import 'echarts/map/js/province/sichuan';//四川
import 'echarts/map/js/province/taiwan';//台湾
import 'echarts/map/js/province/tianjin';//天津
import 'echarts/map/js/province/xianggang';//香港
import 'echarts/map/js/province/xinjiang';//新疆
import 'echarts/map/js/province/xizang';//西藏
import 'echarts/map/js/province/yunnan';//云南
import 'echarts/map/js/province/zhejiang';//浙江
/**
 * 山西省
 */
import { 长治市 } from './../assets/province/山西省/changzhishi.model';
import { 大同市 } from './../assets/province/山西省/datongshi.model';
import { 晋城市 } from './../assets/province/山西省/jinchengshi.model';
import { 晋中市 } from './../assets/province/山西省/jinzhongshi.model';
import { 临汾市 } from './../assets/province/山西省/linfenshi.model';
import { 吕梁市 } from './../assets/province/山西省/lvliangshi.model';
import { 朔州市 } from './../assets/province/山西省/shuozhoushi.model';
import { 太原市 } from './../assets/province/山西省/taiyuanshi.model';
import { 忻州市 } from './../assets/province/山西省/xingzhoushi.model';
import { 阳泉市 } from './../assets/province/山西省/yangquanshi.model';
import { 运城市 } from './../assets/province/山西省/yunchenshi.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [appService]

})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('main', { static: false }) main: ElementRef;
  /**
   * 山西省
   */
  长治市: 长治市 = new 长治市();
  大同市: 大同市 = new 大同市();
  晋城市: 晋城市 = new 晋城市();
  晋中市: 晋中市 = new 晋中市();
  临汾市: 临汾市 = new 临汾市();
  吕梁市: 吕梁市 = new 吕梁市();
  朔州市: 朔州市 = new 朔州市();
  太原市: 太原市 = new 太原市();
  忻州市: 忻州市 = new 忻州市();
  阳泉市: 阳泉市 = new 阳泉市();
  运城市: 运城市 = new 运城市();
  myChart: any = null;
  山西Data: Array<any> = [
    {
      "name": "大同市",
      "value": [
        113.295259,
        40.09031,
        1000,
        100
      ]
    },
    {
      "name": "朔州市",
      "value": [
        112.433387,
        39.331261,
        1000,
        100
      ]
    },
    {
      "name": "忻州市",
      "value": [
        112.733538,
        38.41769,
        1000,
        100
      ]
    },
    {
      "name": "吕梁市",
      "value": [
        111.134335,
        37.524366,
        1000,
        100
      ]
    },
    {
      "name": "太原市",
      "value": [
        112.549248,
        37.857014,
        1000,
        100
      ]
    },
    {
      "name": "晋中市",
      "value": [
        112.736465,
        37.696495,
        1000,
        100
      ]
    },
    {
      "name": "阳泉市",
      "value": [
        113.583285,
        37.861188,
        1000,
        100
      ]
    },
    {
      "name": "临汾市",
      "value": [
        111.517973,
        36.08415,
        1000,
        100
      ]
    },
    {
      "name": "长治市",
      "value": [
        113.113556,
        36.191112,
        1000,
        100
      ]
    },
    {
      "name": "运城市",
      "value": [
        111.003957,
        35.022778,
        1000,
        100
      ]
    },
    {
      "name": "晋城市",
      "value": [
        112.851274,
        35.497553,
        1000,
        100
      ]
    },
  ]
  // 大同市Data: Array<any> = [
  //   {
  //     "name": "大同市",
  //     "value": [
  //       114.279252,
  //       39.763051
  //       1000,
  //       200
  //     ]
  //   },
  // ]
  constructor() { }
  ngOnInit(): void {

  }
  setOption(city?: string) {
    city = city ? city : '山西'
    this.myChart.clear();
    this.myChart = echarts.init(this.main.nativeElement);
    const option = {
      /**
        * 图例数据展示
        */
      visualMap: {
        show: true,
        itemWidth: '10%',
        itemHeight: '100%',
        inRange: {
          color: ['#007ebb', '#00466a']
        },
        type: 'continuous',
        orient: 'horizontal',
        text: ['', '数据展示'],
        left: 'center',
        realtime: true,
        hoverLink: true,
        textStyle: {
          fontFamily: 'PingFangSC-Regular',
          fontSize: 16,
          color: '#ffffff'
        }
      },
      /**
       * 提示框
       */
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          let relVal
          relVal = `<div style="z-index:999;color:#ffffff;font-size:12px;text-align:left;background: #192675;margin:-5px;border: 1px solid #020641;border-radius:5px;padding:12px">
              <span style='line-height:10px;display: inline-block;height:10px;
              width:10px;border-radius:50%;border: 1px solid #FFFFFF;background:
              ${params.color};margin-right:4px'></span>
              ${params.name}<span style="margin:0 4px 0 2px">:</span>${
            params.value[3]
            }
            </div>`
          return relVal
        }
      },
      geo3D: {
        map: city == '山西' ? '山西' : 'city',
        roam: true,
        itemStyle: {
          areaColor: 'rgb(5,101,123)',
          opacity: 1,
          borderWidth: 1,
          borderColor: 'rgb(62,215,213)'
        },
        label: {
          show: false,
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
          label: {
            show: false
          }
        },
        shading: 'lambert',
        light: { //光照阴影
          main: {
            color: '#fff', //光照颜色
            intensity: 1.2, //光照强度
            shadowQuality: 'high', //阴影亮度
            shadow: true, //是否显示阴影
            alpha: 150,
            beta: 150

          },
        },
        viewControl: {
          distance: 220,
        },
        environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0, color: '#00aaff' // 天空颜色
        }, {
          offset: 0.7, color: '#998866' // 地面颜色
        }, {
          offset: 1, color: '#998866' // 地面颜色
        }], false),
      },
      series: [
        {
          type: 'scatter3D',
          coordinateSystem: 'geo3D',
          data: this.山西Data,
          symbol: 'pin',
          symbolSize: 30,
          itemStyle: {
            color: 'red',
            borderColor: '#fff',
            borderWidth: 1
          },
          label: {
            show: true,
            formatter: '{b}',
            position: 'top',
            textStyle: {
              color: '#000000', //地图初始化区域字体颜色
              fontSize: 20,
              fontWeight: 'bold',
              backgroundColor: 'rgba(0,0,0,0)'
            }
          }
        },
      ]
    };
    if (this[city]) {
      this[city].city(echarts)
    }
    this.myChart.setOption(option);

  }
  ngAfterViewInit(): void {
    const _that = this;
    this.myChart = echarts.init(this.main.nativeElement);

    this.myChart.on("click", function (params) {
      _that.setOption(params.name)
    });
    this.setOption()
  }
  alias() {

  }
}
