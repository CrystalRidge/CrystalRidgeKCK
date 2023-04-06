<?php
/**
 * Template for Timeline and History Slider Pro - Design 1
 *
 *
 * @package Timeline and History Slider
 * @version 1.3
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $post; ?>

<div id="wpostahs-slider-nav-<?php echo $unique; ?>" class="wpostahs-slider-nav-<?php echo $unique; ?> wpostahs-slider-nav wpostahs-slick-slider" <?php echo $slider_as_nav_for; ?>>
	<?php while ( $query->have_posts() ) : $query->the_post();
		$feat_image = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium' ); ?>
		<div class="wpostahs-slider-nav-title">
			<div class="wpostahs-main-title">
			<?php if( !empty($feat_image) ) { ?>
				<img <?php if($lazyload) { ?>data-lazy="<?php echo esc_url($feat_image[0]); ?>" <?php } ?> src="<?php if(empty($lazyload)) { echo esc_url($feat_image[0]); } ?>" alt="<?php the_title_attribute(); ?>" />
			<?php } echo the_title(); ?>
			</div>
		</div>
	<?php endwhile; ?>
</div>

<div class="wpostahs-slider-for-<?php echo $unique; ?> wpostahs-slider-for wpostahs-slick-slider">
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>
		<div class="wpostahs-slider-nav-content">
			<h2 class="wpostahs-centent-title"><?php echo the_title(); ?></h2>
			<div class="wpostahs-centent">
				<?php echo the_content(); ?>
			</div>
		</div>
	<?php endwhile; ?>
</div><!-- #post-## -->