<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'i9113600_wp1' );

/** Database username */
define( 'DB_USER', 'i9113600_wp1' );

/** Database password */
define( 'DB_PASSWORD', 'U.9bPlRNzLTtz7ZJ4DB83' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'hOS6324WN4Kf4jNsM2sbsCg1TqTU5KwVqXO0ySQUlN0THGMADnFwmz20yRSRRXzA');
define('SECURE_AUTH_KEY',  'sKHLf9V40uKWf2oQ84guTkhC8nOiryTz2SK5XXtseRkQ13VS3A1ptsUAYiuzK69l');
define('LOGGED_IN_KEY',    'GOVssyD2fdsOVj2LKzIiWhgWfaZY5qXpj8iJz6pKgtusKXL8QDXSo81UTYfJDPHB');
define('NONCE_KEY',        '5NOmh1xAMk9xaupz53VlzDNZcJhyk2yLQRDUA3ll77IPOnmCx2bISshIlC7wn7GX');
define('AUTH_SALT',        'nm8dJVEZs4527v9E5xO6LW8Jb5llXMUPkhzISQqbVgyUOjtrg3QuF3mBCYw665oN');
define('SECURE_AUTH_SALT', 'jdygo78MFSp6czibN1OrW9vl23r2kKpDVV7ja7mw6UjCeneqO60osISAXCk3trXt');
define('LOGGED_IN_SALT',   'NQj2wdfD4LKbjTrqmCJ05TDn2yMxhm7vTopGphAwmGjZ7s1UxNeXNEvURL1JlRXb');
define('NONCE_SALT',       'VjNEztLBMA7JFPx42wlHh5DNixqlAxwydTBEmxRb26M64mRGuL3SNGluaXbv13b3');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');
define('FS_CHMOD_DIR',0755);
define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
