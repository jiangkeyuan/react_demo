import React, { useState, useEffect } from 'react';
import './index.scss';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import { Icon } from 'antd';
const titleName = [
  {
    name: "首页",
    id: "2",
    path: "titleHome"
  },
  {
    name: "动画",
    id: "3",
    path: "animation"
  },
  {
    name: "番剧",
    id: "4",
    path: "folkOpera"
  }, {
    name: "国创",
    id: "5",
    path: "nationalInnovation"
  },
  {
    name: "音乐",
    id: "6",
    path: "music"
  },
  {
    name: "舞蹈",
    id: "7",
    path: "dance"
  }, {
    name: "科技",
    id: "8",
    path: "titleHome"
  }
  , {
    name: "数码",
    id: "9",
    path: "titleHome"
  }
  , {
    name: "游戏",
    id: "10",
    path: "titleHome"
  }
  , {
    name: "娱乐",
    id: "11",
    path: "titleHome"
  }, {
    name: "鬼畜",
    id: "12",
    path: "titleHome"
  },
]
const pages = [];
//轮播切换组件数据
titleName.forEach((v, index) => {
  const page = Math.floor(index / 4);
  if (!pages[page]) {
    pages[page] = [];
  }
  pages[page].push(v);
  return pages;
})
let pre = 0;
//动画部分
const TitleSwiper = (props) => {
  let [list, setClassList] = useState(['titleSwiper'])
  useEffect(() => {
    if (props.visible) {
      setClassList(['titleSwiper', 'showAnimation'])
    } else {
      setClassList(['titleSwiper', 'hiddenAnimation'])
      if (pre === 0) {
        setClassList(['titleSwiper', 'hiddenAnimation', "hiddenClassSwiper"])
      }
    }
  }, [props.visible])
  return (
    <div className={list.join(' ')}>
      <div className='titleSwiperName'>
        {
          titleName.map((v, i) => {
            return (
              <p key={v.id} onClick={() => gotoTitleSwiper(i, props.setSwiperIndex, props.setIndex, props.setTitleIndex, v.id, props.setVisible)} className={props.titleSwiperIndex === i ? ['bottom', 'titleNameHeader'].join(' ') : 'titleNameHeader'}>
                {v.name}
              </p>
            )
          })
        }
      </div>
      <p onClick={() => hiddenTitle(props.setVisible)} className='hiddenAnimation'><Icon type="up" /></p>
    </div>

  )
}
const hiddenTitle = (setVisible) => {
  setVisible(false);
}
const gotoTitleSwiper = (i, setSwiperIndex, setIndex, setTitleIndex, id, setVisible) => {
  setSwiperIndex(i);
  pages.forEach((v, index) => {
    v.forEach((k, ins) => {
      if (k.id === id) {
        setIndex(ins);
        setTitleIndex(index);
        swiper.slideTo(index);
        hiddenTitle(setVisible)
      }
    })
  })
}
let swiper;
const TitleScroll = () => {
  //控制显示第几页
  let [i, setIndex] = useState(0);
  let [titleSwiperIndex, setSwiperIndex] = useState(0);
  //控制显示第几个 动态class
  let [titleIndex, setTitleIndex] = useState(0);
  let [visible, setVisible] = useState(false);
  //相当于生命周期
  useEffect(() => {
    swiper = new Swiper('.swiper-container', {
      loop: false, // 循环模式选项
      autoplay: false,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
    });
  })
  const gotoTitle = (index, ins, k) => {
    setIndex(ins);
    setTitleIndex(index);
    titleName.forEach((v, index) => {
      if (v.id === k.id) {
        setSwiperIndex(index);
      }
    })
  }
  const onOpenChange = () => {
    pre++;
    setVisible(!visible);
  }
  return (
    <div className='title'>
      <div className = 'swiperPosition'>
        <TitleSwiper titleSwiperIndex={titleSwiperIndex} visible={visible} setVisible={setVisible} setSwiperIndex={setSwiperIndex} setIndex={setIndex} setTitleIndex={setTitleIndex}></TitleSwiper>
      </div>
      <div className='swiperFixed'>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              pages.map((v, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    {
                      v.map((k, ind) => {
                        return (
                          <div key={k.id} className='titleName' onClick={() => gotoTitle(index, ind, k)}>
                            <p className={ind === i && titleIndex === index ? 'bottom' : ''}>{k.name}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='icon-title' onClick={() => onOpenChange()}>
          <Icon type="down" />
        </div>
      </div>
    </div>
  )
}
export default TitleScroll;