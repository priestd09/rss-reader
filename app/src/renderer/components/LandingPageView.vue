<template>
	<div>
		<el-row>
			<side-nav></side-nav>
			<el-col :span="8" :offset="4" class="article-list-container">
				<el-col :span="8" class="search-container">
					<el-col :span="22" class="search-input">
						<el-input
							placeholder="Search"
							icon="search"
							v-model="input2"
							:on-icon-click="handleIconClick">
						</el-input>
					</el-col>
				</el-col>
				<article-list></article-list>
			</el-col>
			<el-col :span="12" :offset="12" class="articles-container">
				<article-page></article-page>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import SideNav from './LandingPageView/SideNav';
import ArticlePage from './LandingPageView/ArticlePage';
import ArticleList from './LandingPageView/ArticleList';

export default {
  data() {
    return {
      title: null,
      author: null,
      published_date: null,
      content: null,
    };
  },
  components: {
    SideNav,
    ArticlePage,
    ArticleList,
  },
  name: 'landing-page',
};
</script>

<style lang="scss">
.article-list-container {
	top:0px;
	bottom:0px;
	left:0px;
	right: 0px;
	overflow:hidden;
	min-height:100vh;
	height: 100%;
	border-right:1px solid #d3d3d3;
	position:absolute;
}

.search-container {
	padding-top: 10px;
	padding-bottom: 10px;
	background: white;
	border-bottom: 1px solid #d3d3d3;
	height: 57px;
	width: 100%;
	margin: 0 auto;
	.search-input {
		margin: 0 auto;
		float:none;
	}
}
</style>
