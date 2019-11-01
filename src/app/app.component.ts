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
import { changzhishi } from './../assets/province/shanxi/changzhishi.model';
import { datongshi } from './../assets/province/shanxi/datongshi.model';
import { jinchengshi } from './../assets/province/shanxi/jinchengshi.model';
import { jinzhongshi } from './../assets/province/shanxi/jinzhongshi.model';
import { linfenshi } from './../assets/province/shanxi/linfenshi.model';
import { lvliangshi } from './../assets/province/shanxi/lvliangshi.model';
import { shuozhoushi } from './../assets/province/shanxi/shuozhoushi.model';
import { taiyuanshi } from './../assets/province/shanxi/taiyuanshi.model';
import { xingzhoushi } from './../assets/province/shanxi/xingzhoushi.model';
import { yangquanshi } from './../assets/province/shanxi/yangquanshi.model';
import { yunchenshi } from './../assets/province/shanxi/yunchenshi.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [appService]

})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('main', { static: false }) main: ElementRef;
  taiyuanshi: taiyuanshi = new taiyuanshi();
  shuozhoushi: shuozhoushi = new shuozhoushi();

  myChart: any = null;

  constructor() { }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.myChart = echarts.init(this.main.nativeElement);
    const option = {
      geo3D: {
        map: '云南',
        roam: true,
        itemStyle: {
          areaColor: 'rgb(5,101,123)',
          opacity: 1,
          borderWidth: 0.8,
          borderColor: 'rgb(62,215,213)'
        },
        label: {
          show: true,
          textStyle: {
            color: 'yellow', //地图初始化区域字体颜色
            fontSize: 24,
            opacity: 1,
            backgroundColor: 'rgba(0,0,0,0)'
            //backgroundColor: 'rgba(53,171,199,0)'
          },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
          label: {
            show: true,
            textStyle: {
              color: 'yellow',
              fontSize: 24,
            }
          }
        },
        //shading: 'lambert',
        light: { //光照阴影
          main: {
            color: '#fff', //光照颜色
            intensity: 1.2, //光照强度
            //shadowQuality: 'high', //阴影亮度
            shadow: false, //是否显示阴影
            alpha: 55,
            beta: 10

          },
          ambient: {
            intensity: 0.3
          }
        },
      },
      series: [

      ]
    };
    if(true){
      // this.taiyuanshi.city(echarts)3
    }
    this.myChart.setOption(option);
  }
  alias(){

  }
}
