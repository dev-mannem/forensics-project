/* Marquee code*/
    var node_count,
    nodeWidth,
    nodeBlock,
    nodeBMarginL = 0,
    flag = true,
    currentNode = 0,
    lastNode,
    speed = 500,
    channelOmniture,
    adslideLen,
    nCount = 0;
    $(document).ready(function() {
      	
        nodeBlock = $(".adSlider");
        $(nodeBlock).each(function() {
            $(".adSliderChild > ul", this).css('width', ($("li", this).width()) * ($(".adSliderChild > ul > li", this).length));
            adslideLen = $(".adSliderChild > ul > li", this).length;
			
        });
        if (adslideLen < 1)
            $(".adSlider .adsliderNextBtn a").addClass("notActive");

        // Next Button Click Code 
        $(".adsliderNextBtn a").click(function() {
            if (flag && adslideLen > 3) {
                flag = false;
                var thisB = $(this).parents(".adSlider");
				nodeWidth = ($("li", thisB).width()) * 1;
                nodeBMarginL = eval($("ul", thisB).css("marginLeft").substring(0, $("ul", thisB).css("marginLeft").length - 2));
                nodeCount = (adslideLen - Math.round($(".adSliderChild", thisB).width() / nodeWidth));
                if (nodeCount != nCount) 
				{
					
				
					nodeBMarginL = -(Math.abs(nodeBMarginL) + nodeWidth);
                    nCount = nCount + 1;
					
					if($(".adSlider .adSliderChild > ul").width() <= (Math.abs(nodeBMarginL) + nodeWidth))
					{
					//alert('not match ' + ((Math.abs(nodeBMarginL) + nodeWidth) - $(".adSlider .adSliderChild > ul").width()));
					nodeBMarginL = nodeBMarginL + ((Math.abs(nodeBMarginL) + nodeWidth) - $(".adSlider .adSliderChild > ul").width());
					nCount = nodeCount;
					}

					//alert(($("li", thisB).width()) * 4);
					//alert($(".adSlider .adSliderChild > ul").width() + " - nodecount - " + nodeCount + "ncount" + nCount);
					//alert(nodeBMarginL);
									//alert(nodeCount);
                    animateMe(thisB, nodeBMarginL, nCount, nodeCount);
                    // function that causes the animation effect
                } else {
                    flag = true;
                }
            }

        });

        // Previous Button Click Code
        $(".adsliderPrvBtn a").click(function() {
            if (flag && adslideLen > 3) {
                
                flag = false;
                var thisB = $(this).parents(".adSlider");
                var nodeBMarginL = $("ul", thisB).css("marginLeft");
                nodeBMarginL = eval(nodeBMarginL.substring(0, nodeBMarginL.length - 2));
                nodeWidth = ($("ul li", thisB).width()) * 1;
                nodeCount = (adslideLen - Math.round($(".adSliderChild", thisB).width() / nodeWidth));
				
                if (Math.abs(nodeBMarginL) > 0) {
                    nodeBMarginL = -(Math.abs(nodeBMarginL) - nodeWidth);
                    nCount=nCount - 1;
					if(nodeBMarginL > 0)
					{
					//alert('not match ' + ((Math.abs(nodeBMarginL) + nodeWidth) - $(".adSlider .adSliderChild > ul").width()));
					nodeBMarginL = 0;
					nCount = 0;
					}
					//alert($(".adSlider .adSliderChild > ul").width() + " - nodecount - " + nodeCount + "ncount" + nCount);
					//alert(nodeBMarginL);
					
                    animateMe(thisB, nodeBMarginL, nCount, nodeCount);
                    // function that causes the animation effect
                } else
                    flag = true;
            }

        });

        // Main Animation Function
        function animateMe(thisB, nodeBMarginL, nCount, nodeCount) {
           if (nCount == 0)
                $(".adsliderPrvBtn a", thisB).addClass("notActive");
            else
                $(".adsliderPrvBtn a", thisB).removeClass("notActive");
				//alert(nCount + " = " + nodeCount);
            if (nCount == nodeCount)
                $(".adsliderNextBtn a", thisB).addClass("notActive");
            else
                $(".adsliderNextBtn a", thisB).removeClass("notActive");

            if (speed == 0)
                $(".adSliderChild > ul", thisB).css("marginLeft", nodeBMarginL);
            else {
                $(".adSliderChild > ul", thisB).animate({
                    marginLeft: nodeBMarginL
                }, 500, function() {
                    flag = true;
                });
            }
        }

    });