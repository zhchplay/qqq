//引入gulp模块
var gulp=require("gulp");
var concat=require("gulp-concat");
var cleancss=require("gulp-clean-css");

//task:定义任务
gulp.task('default',['copy','concat     '],function(){
	console.log("我是默认的命令");
});

gulp.task('printr',function(){
	console.log("hello gulp");
});

//src:查找处理的文件
gulp.task('copy',function(){
	gulp.src('./src/**/*')// **/*是读取下面所有文件夹和文件
	.pipe(gulp.dest('./build/'));//dest 写入文件 //pipe相当于下一步
});

//watch:监视文件变化
gulp.task('watchfile',function(){
	gulp.watch('./src/index.html',['printr']);
});

//css合并 gulp-concat
gulp.task('concat',function(){
	gulp.src('./src/css/*.css')
	.pipe(concat('ab.min.css'))
	.pipe(cleancss())
	.pipe(gulp.dest('./build/css/'));

});
