/**
 * Returns Dynamic Generated Classes
 */

function TmClasses( attributes ) {

	/* Arrow position */
	var arrow_align_class  = "uagb-timeline__arrow-top"+" "
	if( attributes.arrowlinAlignment == "center" ){
		arrow_align_class = "uagb-timeline__arrow-center"+" "
	}else if( attributes.arrowlinAlignment == "bottom" ){
		arrow_align_class = "uagb-timeline__arrow-bottom"+" "
	}

	/* Alignmnet */
	var align_class = "uagb-timeline__center-block "+" "
	if( attributes.timelinAlignment == "left" ){
		align_class = "uagb-timeline__left-block"+" "
	}else if( attributes.timelinAlignment == "right"){
		align_class = "uagb-timeline__right-block"+" "
	}
	align_class+= arrow_align_class+""
	align_class += "uagb-timeline__responsive-"+attributes.stack+" uagb-timeline"

	return [
		align_class
	]
}

export default TmClasses