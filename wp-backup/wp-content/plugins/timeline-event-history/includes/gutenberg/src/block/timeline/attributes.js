const { __ } = wp.i18n

const item = []
const date_arr = []

for (var i = 1; i <= 5; i++) {

	item.push(
		{
			"time_heading": __( "Timeline WP Heading " ) + i ,
			"time_desc": __( "This is Timeline WP description, you can change me anytime click here " ),
			"time_date": __( "2013 - 2014" ) ,
			"image_icon": "icon",
			"icon": "fab fa-arrow-circle-right",
			"image": "",
		}
	)

	var j = i - 1
	var today = new Date( "1/1/2019" )
	var dd = today.getDate()
	var mm = today.getMonth()+1 //January is 0!
	var yyyy = today.getFullYear()-j

	if( dd < 10 ) {
		dd = "0" + dd
	}

	if( mm < 10 ) {
		mm = "0" + mm
	}

	today = mm + "/" + dd + "/" + yyyy
	var p = { "title" : today }

	date_arr.push(
		{
			"title": today,
		}
	)
}

const attributes = {
	tm_content: {
		type: "array",
		default : item,
	},
	align : {
		type : "string",
		default : "center",
	},
	design : {
		type : "string",
		default : "default",
	},
	accentColor : {
		type : "string",
	},
	dateColor : {
		type : "string",
	},
	iconColor : {
		type : "string",
	},
	headingColor : {
		type : "string",
	},
	subHeadingColor : {
		type : "string",
	},
	separatorBg : {
		type : "string",
		default : "#eee",
	},
	backgroundColor : {
		type : "string",
		default : "#eee",
	},
	separatorColor : {
		type : "string",
		default : "#eee",
	},
	separatorFillColor : {
		type : "string",
		default : "#61ce70",
	},
	separatorBorder : {
		type : "string",
		default : "#eee",
	},
	borderFocus : {
		type : "string",
		default : "#5cb85c",
	},
	headingTag : {
		type : "string",
		default : "h4",
	},
	horizontalSpace : {
		type : "number",
		default : 10,
	},
	verticalSpace : {
		type : "number",
		default : 15,
	},
	headFontSize : {
		type : "number",
	},
	headFontSizeType: {
		type: "string",
		default: "px"
	},
	dateFontSizeType: {
		type: "string",
		default: "px"
	},
	dateFontSize: {
		type: "number",
	},
	headFontSize: {
		type: "number",
	},
	headFontSizeTablet: {
		type: "number",
	},
	headFontSizeMobile: {
		type: "number",
	},
	dateFontSizeTablet: {
		type: "number",
	},
	dateFontSizeMobile: {
		type: "number",
	},
	headFontFamily: {
		type: "string",
		default: "Default",
	},
	headFontWeight: {
		type: "string",
	},
	headFontSubset: {
		type: "string",
	},
	headLineHeightType: {
		type: "string",
		default: "em"
	},
	headLineHeight: {
		type: "number",
	},
	headLineHeightTablet: {
		type: "number",
	},
	headLineHeightMobile: {
		type: "number",
	},
	headLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	timelinAlignment : {
		type : "string",
		default : "center",
	},
	arrowlinAlignment : {
		type : "string",
		default : "center",
	},
	subHeadFontSizeType: {
		type: "string",
		default: "px"
	},
	subHeadFontSize: {
		type: "number",
	},
	subHeadFontSizeTablet: {
		type: "number",
	},
	subHeadFontSizeMobile: {
		type: "number",
	},
	subHeadFontFamily: {
		type: "string",
		default: "Default",
	},
	subHeadFontWeight: {
		type: "string",
	},
	subHeadFontSubset: {
		type: "string",
	},
	subHeadLineHeightType: {
		type: "string",
		default: "em",
	},
	subHeadLineHeight: {
		type: "number",
	},
	subHeadLineHeightTablet: {
		type: "number",
	},
	subHeadLineHeightMobile: {
		type: "number",
	},
	subHeadLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	headSpace : {
		type : "number",
		default : 5,
	},
	separatorwidth : {
		type : "number",
		default : 3,
	},
	borderwidth : {
		type : "number",
		default : 0,
	},
	iconFocus : {
		type : "string",
		default : "#fff",
	},
	iconBgFocus : {
		type : "string",
		default : "#61ce70",
	},
	dateFontsizeType: {
		type: "string",
		default: "px"
	},
	dateFontsize: {
		type: "number",
	},
	dateFontsizeTablet: {
		type: "number",
	},
	dateFontsizeMobile: {
		type: "number",
	},
	dateFontFamily: {
		type: "string",
		default: "Default",
	},
	dateFontWeight: {
		type: "string",
	},
	dateFontSubset: {
		type: "string",
	},
	dateLineHeightType: {
		type: "string",
		default: "em"
	},
	dateLineHeight: {
		type: "number",
	},
	dateLineHeightTablet: {
		type: "number",
	},
	dateLineHeightMobile: {
		type: "number",
	},
	dateLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	connectorBgsize : {
		type : "number",
		default : 35,
	},
	subHeadSpace : {
		type : "number",
		default : 5,
	},
	dateBottomspace : {
		type : "number",
		default : 5,
	},
	block_id  : {
		type : "string",
		default : "0",
	},
	timelineItem :{
		type : "number",
		default : 5,
	},
	tm_client_id  : {
		type : "string",
		default : "not_set",
	},
	borderRadius : {
		type : "number",
		default : 2,
	},
	bgPadding : {
		type : "number",
		default : 20,
	},
	iconSize : {
		type : "number",
		default : 12,
	},
	icon : {
		type : "string",
		default : "fab fa fa-calendar-alt"
	},
	t_date : {
		type: "array",
		default: date_arr,
	},
	displayPostDate:{
		type: "boolean",
		default: true,
	},
	stack: {
		type: "string",
		default: "tablet"
	}
}

export default attributes