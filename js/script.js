(function($){
    const obj = {
        init (){
            this.section1();
            this.section2();
        },
        section1(){
            let cnt = 0;
            let setId = 0;
            let winW = $(window).innerwidth;
            let mouseDown = null;
            let mouseUp = null;
            const slideContainer = $('#section1 .slide-container');
            const slideWrap = $('#section1 .slide-wrap');
            const slide = $('#section1 .slide');
            const nextBtn = $('#section1 .next-btn');
            const prevBtn = $('#section1 .prev-btn');
            const n = ($('#section1 .slide').length - 2) - 1 ;
            const slideImg = $('#section1 img');
            const imgRate = 0.7471490365709792;

            slideImg.css({width: imgRate * winW});

            $(window).resize(function(){
                winW = $(window).innerwidth;
                slideImg.css({width: imgRate * winW});
            });

            slideContainer.on({
                mousedown(e){
                    mouseDown = e.clientX;
                },
                mouseup(e){
                    mouseUp = e.clientX;
                    if(mouseDown - mouseUp > 10){
                        clearInterval(setId);
                        autoTimer();
                        if(!slideWrap.is(':animated')){
                            nextCount();
                        }
                    }
                    if(mouseDown - mouseUp < -10){
                        clearInterval(setId);
                        autoTimer();
                        if(!slideWrap.is(':animated')){
                            prevCount();
                        }
                    }
                }
            })

            slideContainer.on({
                touchstart(e){
                    mouseDown = e.originalEvent.changedTouches[0].clientX;
                },
                touchend(e){
                    mouseUp = e.originalEvent.changedTouches[0].clientX;
                    if(mouseDown - mouseUp > 10){
                        clearInterval(setId);
                        autoTimer();
                        if(!slideWrap.is(':animated')){
                            nextCount();
                        }
                    }
                    if(mouseDown - mouseUp < -10){
                        clearInterval(setId);
                        autoTimer();
                        if(!slideWrap.is(':animated')){
                            prevCount();
                        }
                    }
                }
            })

            $(document).on({
                mousedown(e){
                    mouseDown = e.clientX;
                }
            });

            mainNextSlide();
            function mainNextSlide(){
                slide.css({zIndex:1, opacity: 1});
                slide.eq(cnt).css({zIndex:2});
                slide.eq(cnt===0 ? n : cnt-1).css({zIndex:3}).stop().animate({opacity:1}, 0).animate({opacity:0}, 1000);
            }
            function mainPrevSlide(){
                slide.css({zIndex:1, opacity: 1});
                slide.eq(cnt===n ? 0 : cnt+1).css({zIndex:2});
                slide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0}, 0).animate({opacity:1}, 1000);
            }

            nextCount();
            function nextCount(){
                cnt++;
                if(cnt>n) cnt=0
                mainNextSlide()
            }

            prevCount();
            function prevCount(){
                cnt--;
                if(cnt<0) cnt=n;
                mainPrevSlide()
            }

            nextBtn.on({
                click(){
                    clearInterval(setId);
                    autoTimer();
                    if(!slideWrap.is(':animated')){
                        nextCount();
                    }
                }
            });

            prevBtn.on({
                click(){
                    clearInterval(setId);
                    autoTimer();
                    if(!slideWrap.is(':animated')){
                        prevCount();
                    }
                }
            });

            autoTimer();
            function autoTimer(){
                setId = setInterval(nextCount, 4000)
            }
        },
        section2(){
            let cnt = 0;
            let mouseDown = null;
            let mouseUp = null;
            let winW = $(window).innerWidth();
            let slideWidth;
            const sec2Con = $('#section2 .container');
            const slideContainer = $('#section2 .slide-container');
            const slide = $('#section2 .slide');
            const slideWrap = $('#section2 .slide-wrap');
            const nextBtn = $('#section2 .next-btn');
            const prevBtn = $('#section2 .prev-btn');

            if(winW>960){
                slideWidth = (sec2Con.innerWidth())/4;
            }
            else{
                if(winW>480){
                    slideWidth = (sec2Con.innerWidth())/2;
                }
                else{
                    slideWidth = (sec2Con.innerWidth())/2;
                }
            }
            slideWrap.css({width: slideWidth*20 });

            $(window).resize(function(){
                winW = $(window).innerWidth();
                if(winW>960){
                    slideWidth = (sec2Con.innerWidth())/4;
                }
                else{
                    if(winW>480){
                        slideWidth = (sec2Con.innerWidth())/2;
                    }
                    else{
                        slideWidth = (sec2Con.innerWidth())/2;
                    }
                }
                slideWrap.css({width: slideWidth*20 });
            });

            slideContainer.on({
                mousedown(e){
                    mouseDown = e.clientX;
                },
                mouseup(e){
                    mouseUp = e.clientX;
                    if(mouseDown - mouseUp > 10){
                        if(!slideWrap.is(':animated')){
                            nextCount();
                        }
                    }
                    if(mouseDown - mouseUp < -10){
                        if(!slideWrap.is(':animated')){
                            prevCount();
                        }
                    }
                }
            });

            slideContainer.on({
                touchstart(e){
                    mouseDown = e.originalEvent.changedTouches[0].clientX;
                },
                touchend(e){
                    mouseUp = e.originalEvent.changedTouches[0].clientX;
                    if(mouseDown - mouseUp > 10){
                        if(!slideWrap.is(':animated')){
                            nextCount();
                        }
                    }
                    if(mouseDown - mouseUp < -10){
                        if(!slideWrap.is(':animated')){
                            prevCount();
                        }
                    }
                }
            });

            $(document).on({
                mousedown(e){
                    mouseDown = e.clientX;
                }
            });

            $(document).on({
                mousedown(e){
                    mouseDown = e.clientX;
                }
            });

            mainSlide();
            function mainSlide(){
                nextPrevArrowBtn()
                slideWrap.stop().animate({marginLeft: `${-(100 * cnt)}%`}, 300);
            }

            nextCount();
            function nextCount(){
                if(cnt > 3) cnt = 3;
                cnt++;
                mainSlide();
            }

            prevCount();
            function prevCount(){
                if(cnt < 1) cnt = 1;
                cnt--;
                mainSlide();
            }

            function nextPrevArrowBtn(){
                if(cnt > 3) {
                    $('#section2 .next-btn').fadeOut(100);
                }
                else{
                    $('#section2 .next-btn').fadeIn(100);
                }
        

                if(cnt < 1) {
                    $('#section2 .prev-btn').fadeOut(100);
                }
                else{
                    $('#section2 .prev-btn').fadeIn(100);
                }
            }
        

            nextBtn.on({
                click(){
                    if(!slideWrap.is(':animated')){
                        nextCount();
                    }
                }
            });

            prevBtn.on({
                click(){
                    if(!slideWrap.is(':animated')){
                        prevCount();
                    }
                }
            });

        }
    }
    obj.init();
})(jQuery);