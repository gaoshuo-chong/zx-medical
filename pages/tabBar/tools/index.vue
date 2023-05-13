<template>
	<view class="content">
		<view class="uni-margin-wrap">
			<!-- <view class="status_bar">
		    </view> -->
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item">
						<image style="width: 100%;height: 100%;"
							src="https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">图片B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">图片C</view>
				</swiper-item>
			</swiper>
			<view class="promote_list">
				<view v-for="item in promoteList" class="d_flex f_d list" @click="goPage(item)">
					<image class="iconfont" style="width:48rpx;height:49rpx" :src="item.imageUrl"></image>
					{{item.name}}
				</view>
			</view>
			<view style="margin-top: 20rpx;">
				<uni-grid :column="4" :highlight="true" @change="change">
								<uni-grid-item v-for="(item, index) in 10" :index="index" :key="index">
									<view class="grid-item-box" style="background-color: #fff;">
										<uni-icons type="image" :size="30" color="#777" />
										<text class="text">功能{{item}}</text>
									</view>
								</uni-grid-item>
							</uni-grid>
				</view>
				<!-- <u-popup  ref="upop" mode="center" width="80%" :mask-close-able="false" @touchmove.stop.prevent="moveHandle"></u-popup> -->

		</view>
		<myTab :current-page="0"></myTab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				promoteList: [{
						imageUrl: '/static/source.png',
						name: '功能1',
						// url: '/pages/bamboo/bambooList'
					},
					{
						imageUrl: '/static/source.png',
						name: '功能2',
						// url: '/pages/bamboo/bambooList'
					},
					{
						imageUrl: '/static/source.png',
						name: '功能3'
					},
					{
						imageUrl: '/static/source.png',
						name: '功能4'
					},
					{
						imageUrl: '/static/source.png',
						name: '功能5'
					}
				],
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			goPage() {
				uni.showToast({
					icon: 'none',
					title: '功能开发中~'
				})
				uni.hideLoading()
				return
			},
			change(e){
				if(e.detail.index==1){
					this.$u.route("/pages/fullPage/index");
				}else{
					uni.showToast({
						icon: 'none',
						title: '功能开发中~'
					})
					uni.hideLoading()
					return
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		background: #f8f8f8;
	}
		 .mark{
		   	 
		   	position:absolute;
		   	height: 500rpx; 
		   	color: #fff;
		   	background: rgba(0, 0, 0, 0.5); 
		   	left: 0%;
		   	right: 0%;
		   	margin-top: -500px;
		   	font-size: 26rpx;
		   	text-align: center;
		   	box-shadow: 2px -3px 100px -5px  #FFFFFF;
		   
		   }

	.d_flex {
		display: flex;
	}

	.f_d {
		flex-direction: column;
		align-items: center;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.promote_list {
		padding: 25rpx;
		background-color: #2a2939;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.list {
			// margin-top: 36rpx;
			font-size: 24rpx;
			color: #ffffff;
		}
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		// color: $u-type-info;
	}

		.grid-item-box {
			flex: 1;
			// position: relative;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 15px 0;
		}
</style>
