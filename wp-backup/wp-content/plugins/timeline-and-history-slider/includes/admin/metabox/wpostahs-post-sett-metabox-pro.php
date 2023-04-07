<?php
/**
 * Function Custom meta box for Premium
 * 
 * @package Timeline and History slider
 * @since 1.4.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

?>
<div class="pro-notice"><?php echo sprintf( __( 'Utilize these <a href="%s" target="_blank">Premium Features</a> with Essential Plugin to boost your <b>to get best of this plugin.</b>.', 'timeline-and-history-slider'), WPOSTAHS_PLUGIN_LINK); ?></div>
<table class="form-table wpostahs-metabox-table">
	<tbody>

		<tr class="wpostahs-pro-feature">
			<th>
				<?php _e('Timeline Custom Icon ', 'timeline-and-history-slider'); ?><span class="wpostahs-pro-tag"><?php _e('PRO','timeline-and-history-slider');?></span>
			</th>
			<td>
				<input type="text" name="wpostahs_custom_icon" value="" class="regular-text" disabled="" />
				<input type="button" name="wpostahs_custom_icon" class="button-secondary" value="<?php _e( 'Upload Image', 'timeline-and-history-slider'); ?>" disabled="" /> <input type="button" name="wpostahs_custom_icon_clear" class="button button-secondary" value="<?php _e( 'Clear', 'timeline-and-history-slider'); ?>" disabled="" /> <br />
				<span class="description"><?php _e('Upload custom icon that you want to show for your timeline instead of fa icon.', 'timeline-and-history-slider'); ?></span>
			</td>
		</tr>
		<tr class="wpostahs-pro-feature">
			<th>
				<?php _e('Timeline Fa Icon ', 'timeline-and-history-slider'); ?><span class="wpostahs-pro-tag"><?php _e('PRO','timeline-and-history-slider');?></span>
			</th>
			<td>
				<input type="text" name="wpostahs_timeline_icon" value="" class="regular-text" disabled="" /><br />
				<span class="description"><?php _e('For example :', 'timeline-and-history-slider'); ?> fa fa-bluetooth-b</span>
			</td>
		</tr>

		<tr class="wpostahs-pro-feature">
			<th>
				<?php _e('Read More Link ', 'timeline-and-history-slider'); ?><span class="wpostahs-pro-tag"><?php _e('PRO','timeline-and-history-slider');?></span>
			</th>
			<td>
				<input type="text" name="wpostahs_timeline_link" value="" class="regular-text" disabled="" /><br />
				<span class="description"><?php _e('Enter read more link. You can add external link also. Leave empty to use default post link. ie ', 'timeline-and-history-slider'); ?>https://www.essentialplugin.com</span>
			</td>
		</tr>

	</tbody>
</table><!-- end .wpostahs-metabox-table -->