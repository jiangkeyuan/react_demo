import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './swiper.scss'
const swiperList = [
	{
		name: 'swiper1',
		url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565674607289&di=410aa51eef2938bcd0c53e520cdedf7b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201406%2F04%2F20140604212746_fmECf.jpeg",
		id: 1
	},
	{
		name: 'swiper2',
		url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565674607288&di=73b7431afa006b4be666bf34b69a5574&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201510%2F17%2F20151017203812_RiEQP.jpeg",
		id: 2
	},
	{
		name: 'swiper3',
		url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565674607288&di=47e937ac6a060c5e26f86b9641e4f986&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201311%2F17%2F125654en6sw0w30vfnd7f0.jpg",
		id: 3
	}
]
const Swiper = () => {
	return (
		<div className="swiper2">
			<WingBlank>
				<Carousel
					className='swiperImg'
					autoplay={true}
					infinite
					dots
					swipeSpeed={20}
				>
					{swiperList.map(v => (
						<img
							key={v.id}
							src={v.url}
							alt={v.name}
						/>
					))}
				</Carousel>
			</WingBlank>
		</div>
	)
}
export default Swiper;