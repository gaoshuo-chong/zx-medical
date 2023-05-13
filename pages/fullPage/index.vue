<template>
	<view @click="close" class="mask">
			<view @click.stop="onClick" class="content">
				<u-modal :show="show" :mask-close-able="true" @confirm="confirm" :showConfirmButton="false" title="功能B">
					<view class="slot-content">
						<!-- <view class="top">
							功能B
						</view> -->
						<uni-grid :column="4" :highlight="true" :showBorder="false">
										<uni-grid-item v-for="(item, index) in 10" :index="index" :key="index" >
											<view class="grid-item-box" style="background-color: #fff;">
												<uni-icons type="image" :size="30" color="#777" />
												<text class="text">功能{{item}}</text>
											</view>
										</uni-grid-item>
									</uni-grid>
								
					</view>
				</u-modal>
			</view>
		</view>
</template>

<script>
	export default {
			data() {
				return {
					show: true
				}
			},
			onLoad() {
				console.warn("090")
				this.show = true
			},
			onReady() {
				this.show= true
			},
			methods: {
						onClick(e) {
							uni.showToast({
								title: "点击蒙层关闭"
							})
							this.show = false
							this.close()
						},
						close() {
							uni.navigateBack()
						},
						confirm(){
							this.show = false
						},
						change(item){
							// uni.showToast({
							// 	title: `点击了第${item}项`
							// })
						}
					},
		}
</script>

<style lang="scss">
	.slot-content {
			font-size: 28rpx;
			color: $u-content-color;
			width: 100%;
			.top{
				text-align: center;
				background-color: black;
				color: green;
				padding: 20rpx 0;
			}
		}
		.u-popup__content ::v-deep .u-modal__title{
			background-color: black;
			padding: 30rpx 0 !important;
			color: green!important;
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